import {episodes,characters} from './campaign.js?v=s1-touch-02';
export const FLOOR=540,WORLD=3200;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
export class Game {
 constructor({onEvent=()=>{},onSave=()=>{},random=Math.random}={}){this.onEvent=onEvent;this.onSave=onSave;this.random=random;this.completed=new Set();this.mode='menu';this.keys={};this.aim={x:1,y:0};this.clock=0;}
 emit(type,data={}){this.onEvent({type,...data});}
 stage(){return this.chapter.stages[this.stageIndex];}
 start(index=0,checkpoint=0){
  this.chapter=episodes[clamp(index,0,18)];this.episode=index;this.stageIndex=clamp(checkpoint,0,this.chapter.stages.length-1);this.clock=0;this.mode='play';this.paused=false;this.keys={};this.projectiles=[];this.particles=[];this.shots=[];this.hazards=[];this.story={};this.log=[];this.dialogue=null;this.cam=0;this.npcs={};
  for(const id of this.chapter.roster){const c=characters[id];this.npcs[id]={id,x:c.x,y:FLOOR,goal:c.x,face:id==='TEX'?-1:1,alive:true,visible:true,pose:'idle',anim:0,shoot:2,ghost:id==='CHURCH'&&!!this.chapter.ghost,pink:id==='DONUT'&&this.chapter.pink};}
  this.player={id:this.chapter.player,...this.chapter.spawn,vx:0,vy:0,face:1,health:100,shield:100,grounded:true,hurt:0,shoot:0,throw:0,ammo:24,reload:0,crouch:false,ghost:this.chapter.player==='CHURCH'&&!!this.chapter.ghost,pink:this.chapter.pink};
  this.car={x:740,y:FLOOR,v:0};this.tank={x:2228,y:FLOOR,disabled:false,broken:this.episode>=8,mounted:false};this.mounted=null;
  this.platforms=[{x:0,y:FLOOR,w:WORLD,h:180},{x:400,y:418,w:260,h:18},{x:2580,y:418,w:260,h:18},{x:1120,y:490,w:110,h:50},{x:1640,y:474,w:100,h:66},{x:1950,y:495,w:85,h:45}];
  if(index===14&&this.npcs.SARGE)this.npcs.SARGE.ghost=true;
  if(this.chapter.dead)this.event('churchKilled',true);if(this.chapter.captured)this.event('texCaptured',true);
  if([7,8].includes(index)&&this.npcs.CABOOSE)this.npcs.CABOOSE.onTank=true;
  for(const s of this.chapter.stages.slice(0,this.stageIndex)){for(const e of s.events||[])this.event(e[1],true);if(s.kind==='possess')this.event('possessSarge',true);if(s.kind==='revive')this.event('reviveSarge',true);if(s.kind==='collect'&&s.items.some(i=>/FLAG/.test(i.type)))this.story.flag=true;}
  if(this.story.possessSarge&&!this.story.sargeShot)this.switchPlayer('SARGE');this.begin();this.emit('start');
 }
 save(){this.onSave({episode:this.episode,stage:this.stageIndex,completed:[...this.completed]});}
 begin(){
  const s=this.stage();this.elapsed=0;this.hold=0;this.progress=0;this.pathIndex=0;this.eventsDone=new Set();this.dialogue=null;this.shots=[];this.hazards=[];this.projectiles=[];this.mounted=null;this.interactCooldown=0;this.player.health=Math.max(75,this.player.health);this.player.shield=100;this.player.ammo=24;
  for(const a of Object.values(this.npcs)){a.pinned=false;a.suppress=70;a.pose=a.restrained?'restrained':'idle';a.goal=a.x;}
  this.items=(s.items||[]).map(p=>({...p,done:false}));
  if(s.player)this.switchPlayer(s.player);
  if(s.kind==='scene')for(const [n,a]of Object.values(this.npcs).entries())if(!s.cast.some(c=>c.id===a.id)&&Math.abs(a.x-s.point.x)<300&&!a.restrained)a.goal=s.point.x+350+n*90;
  if(s.cast)for(const c of s.cast){const a=this.npcs[c.id];if(a){a.goal=c.x;a.pose=a.restrained?'restrained':c.pose;}}
  if(['follow','escape'].includes(s.kind)){const a=this.npcs[s.who];if(s.start)a.x=s.start.x;a.goal=s.path[0].x;}
  if(s.kind==='revive'){this.npcs.SARGE.alive=false;this.npcs.SARGE.ghost=false;this.npcs.SARGE.pose='down';this.npcs.SARGE.x=s.point.x;this.npcs.GRIF.goal=s.point.x+50;}
  if(s.kind==='work'){this.npcs[s.who].goal=s.point.x+35;this.npcs[s.who].pose='work';}
  if(s.kind==='tankPractice'){this.switchPlayer('CABOOSE');this.mounted='tank';this.player.x=this.tank.x;this.targets=[{x:1480,y:400,hp:1},{x:1710,y:400,hp:1},{x:1900,y:400,hp:1}];this.tank.mounted=true;this.aim={x:-1,y:0};this.player.face=-1;}
  if(s.kind==='suppress')for(const id of s.targets)this.npcs[id].goal=s.point.x+330+(id==='TUCKER'?90:0);
  if(s.kind==='storyGrenade')this.player.throw=0;
  if(s.dialogue&&s.kind!=='scene')this.radio(s.dialogue);
  this.save();this.emit('stage',{title:s.title});
 }
 switchPlayer(id){this.player.id=id;this.player.ghost=id==='CHURCH'&&!!this.chapter.ghost;}
 radio(lines){this.radioLines=lines.map(([who,text])=>({who,text}));this.radioClock=0;this.radioLine=null;}
 complete(){
  const s=this.stage();if(s.kind==='scene')for(const [i,e]of(s.events||[]).entries())if(!this.eventsDone.has(i))this.event(e[1]);
  this.log.push({title:s.title,done:true});this.stageIndex++;
  if(this.stageIndex>=this.chapter.stages.length){this.stageIndex=this.chapter.stages.length-1;this.mode='complete';this.completed.add(this.episode);this.dialogue=null;this.save();this.emit('complete');return;}
  this.begin();
 }
 prompt(){
  if(this.mode!=='play')return null;const s=this.stage(),p=this.player;
  if(this.dialogue)return {label:'NEXT LINE',kind:'dialogue'};
  if(s.kind==='scene'&&Math.abs(p.x-s.point.x)<180)return {label:'JOIN CONVERSATION',kind:'scene'};
  if(s.kind==='collect'){const item=this.items.find(i=>!i.done&&Math.abs(i.x-p.x)<85&&Math.abs(i.y-p.y)<110);if(item)return {label:'TAKE '+item.type,kind:'collect',item};}
  if(['possess','revive'].includes(s.kind)){const a=this.npcs[s.who];if(Math.abs(a.x-p.x)<110)return {kind:s.kind,label:s.kind==='revive'?'CPR '+this.progress+' / 3':'POSSESS '+s.who};}
  if(s.kind==='work'&&Math.abs(s.point.x-p.x)<160)return {kind:'work',label:'HOLD USE TO ASSIST TEX'};
  if(s.kind==='drive'&&Math.abs(p.x-this.car.x)<140)return {kind:'drive',label:this.mounted?'EXIT WARTHOG':'DRIVE WARTHOG'};
  if(s.kind==='tankPractice')return {kind:'tank',label:'AIM + FIRE AT TRAINING TARGETS'};
  return null;
 }
 interact(){
  if(this.mode!=='play'||this.paused||this.interactCooldown>0)return;this.interactCooldown=.18;const prompt=this.prompt();if(!prompt)return;
  const s=this.stage();if(prompt.kind==='dialogue'){this.nextLine();return;}
  if(prompt.kind==='scene'){const mark=s.cast?.find(a=>a.id===this.player.id);this.player.x=mark?.x??s.point.x-(s.cast.length/2+1)*80;this.dialogue={lines:s.dialogue.map(([who,text])=>({who,text})),index:0,timer:0,total:0};this.emit('line',this.dialogue.lines[0]);return;}
  if(prompt.kind==='collect'){prompt.item.done=true;this.progress++;if(/FLAG/.test(prompt.item.type))this.story.flag=true;this.emit('pickup');if(this.progress>=this.items.length)this.complete();return;}
  if(prompt.kind==='possess'){this.event('possessSarge');this.player.x=this.npcs.SARGE.x;this.switchPlayer('SARGE');this.complete();return;}
  if(prompt.kind==='revive'){this.progress++;this.emit('cpr');if(this.progress>=3){this.event('reviveSarge');this.complete();}return;}
  if(prompt.kind==='drive'){this.mounted=this.mounted?null:'car';this.player.x=this.car.x;return;}
 }
 nextLine(){if(!this.dialogue)return;this.dialogue.index++;this.dialogue.timer=0;if(this.dialogue.index>=this.dialogue.lines.length){this.dialogue=null;this.complete();}else this.emit('line',this.dialogue.lines[this.dialogue.index]);}
 fire(){
  const p=this.player;if(this.mode!=='play'||this.paused||this.dialogue||p.shoot>0||p.reload>0)return;if(p.ammo<=0){this.reload();return;}p.ammo--;p.shoot=this.mounted==='tank'?.65:.14;
  const origin={x:p.x+p.face*35,y:p.y-(p.crouch?38:63)},aim=this.aim;const n=Math.hypot(aim.x,aim.y)||1;this.projectiles.push({...origin,px:origin.x,py:origin.y,vx:aim.x/n*(this.mounted==='tank'?800:1100),vy:aim.y/n*(this.mounted==='tank'?800:1100),life:2.8,kind:'bullet',owner:p.id});this.emit(this.mounted==='tank'?'cannon':'shot');
 }
 reload(){if(this.player.reload<=0&&this.player.ammo<24){this.player.reload=1.1;this.emit('reload');}}
 grenade(){
  const p=this.player;if(this.mode!=='play'||this.paused||p.throw>0||this.dialogue)return;const special=this.stage().kind==='storyGrenade';p.throw=special?1.8:3;
  const n=Math.hypot(this.aim.x,this.aim.y)||1,dx=this.aim.x/n,dy=this.aim.y/n;
  this.projectiles.push({x:p.x+p.face*25,y:p.y-60,vx:dx*(special?900:490),vy:special?-350+dy*200:dy*490-240,life:special?2.2:1.7,kind:'grenade',owner:p.id});this.emit('throw');
 }
 damage(amount){if(this.player.hurt>0||this.player.ghost)return;const p=this.player,block=Math.min(p.shield,amount);p.shield-=block;p.health-=amount-block;p.hurt=.35;this.emit('hurt');if(p.health<=0){this.mode='dead';this.emit('death');}}
 explode(b){this.emit('explosion',{x:b.x,y:b.y});this.particles.push({x:b.x,y:b.y,life:.7,kind:'blast'});if(this.stage().kind==='storyGrenade'&&Math.abs(b.x-this.tank.x)<170&&Math.abs(b.y-490)<120){this.event('disableSheila');this.complete();}for(const id of this.stage().targets||[]){const a=this.npcs[id];if(Math.abs(a.x-b.x)<130)this.pin(a,90);} }
 pin(a,amount){if(a.pinned)return;a.suppress-=amount;if(a.suppress<=0){a.pinned=true;a.pose='kneel';this.progress++;this.emit('pinned',{id:a.id});}}
 event(type,quiet=false){
  const a=this.npcs;this.story[type]=true;if(!quiet)this.emit('story',{name:type});
  switch(type){
   case 'teleportBlues':for(const [id,offset]of[['CHURCH',-60],['TUCKER',60]]){a[id].x=2046+offset;a[id].goal=a[id].x;}break;
   case 'mountCaboose':if(a.CABOOSE)a.CABOOSE.onTank=true;break;
   case 'churchKilled':if(a.CHURCH){a.CHURCH.alive=false;a.CHURCH.pose='down';}break;
   case 'airstrike':this.tank.broken=true;if(a.CABOOSE)a.CABOOSE.onTank=true;break;
   case 'donutInjured':if(a.DONUT){a.DONUT.alive=false;a.DONUT.pose='down';}break;
   case 'redsKnockedOut':for(const id of['GRIF','SIMMONS']){a[id].alive=false;a[id].pose='down';}break;
   case 'texCaptured':if(a.TEX){a.TEX.restrained=true;a.TEX.pose='restrained';a.TEX.x=820;a.TEX.goal=820;}break;
   case 'evacuateDonut':if(a.DONUT)a.DONUT.visible=false;break;
   case 'blackDisguise':a.TUCKER.disguise=true;a.CABOOSE.disguise=true;break;
   case 'possessSarge':a.CHURCH.visible=false;a.SARGE.possessed=true;break;
   case 'releaseTex':a.TEX.restrained=false;a.TEX.pose='run';a.TEX.goal=1500;break;
   case 'sargeShot':a.SARGE.alive=false;a.SARGE.pose='down';a.SARGE.possessed=false;a.CHURCH.visible=true;a.CHURCH.ghost=true;a.CHURCH.x=a.SARGE.x+90;if(this.player.id==='SARGE')this.switchPlayer('CHURCH');break;
   case 'reviveSarge':a.SARGE.alive=true;a.SARGE.ghost=false;a.SARGE.pose='idle';break;
   case 'voiceCardSpark':a.LOPEZ.speaksSpanish=true;break;
   case 'repairSheila':this.tank.broken=false;break;
   case 'possessLopez':a.CHURCH.visible=false;a.LOPEZ.possessed=true;break;
   case 'disableSheila':this.tank.disabled=true;break;
   case 'texDies':a.TEX.alive=false;a.TEX.pose='down';break;
   case 'aiEscape':if(a.CABOOSE)a.CABOOSE.ai=true;break;
  }
 }
 navigation(){const s=this.stage();if(s.kind==='collect')return this.items.find(i=>!i.done);if(s.kind==='follow'||s.kind==='escape')return this.npcs[s.who];if(['revive','possess'].includes(s.kind))return this.npcs[s.who];if(s.kind==='drive')return this.mounted?s.points[this.pathIndex]:this.car;return s.point||this.tank;}
 update(dt,input={}){
  if(this.mode!=='play'||this.paused)return;dt=Math.min(dt,.05);this.clock+=dt;this.elapsed+=dt;this.interactCooldown=Math.max(0,this.interactCooldown-dt);const p=this.player,s=this.stage();
  p.hurt=Math.max(0,p.hurt-dt);p.shoot=Math.max(0,p.shoot-dt);p.throw=Math.max(0,p.throw-dt);if(p.reload>0){p.reload-=dt;if(p.reload<=0)p.ammo=24;}if(p.hurt===0)p.shield=Math.min(100,p.shield+dt*3);
  if(input.use)this.interact();if(input.fire)this.fire();if(input.reload)this.reload();if(input.grenade)this.grenade();p.crouch=!!input.crouch;
  if(this.dialogue){this.dialogue.timer+=dt;this.dialogue.total+=dt;for(const [i,e]of(s.events||[]).entries())if(this.dialogue.total>=e[0]&&!this.eventsDone.has(i)){this.eventsDone.add(i);this.event(e[1]);}const line=this.dialogue.lines[this.dialogue.index];if(this.dialogue.timer>Math.max(3.5,line.text.length*.05))this.nextLine();}
  if(this.stage()!==s)return;
  const move=this.dialogue?0:clamp(input.move||0,-1,1);p.vx=move*(input.sprint?350:p.crouch?130:245);if(move)p.face=Math.sign(move);
  if(this.mounted==='car'){this.car.v+=(p.vx-this.car.v)*Math.min(1,dt*3);this.car.x=clamp(this.car.x+this.car.v*dt,70,WORLD-70);p.x=this.car.x;p.y=FLOOR-30;}
  else if(this.mounted==='tank'){p.x=this.tank.x;p.y=FLOOR-95;}
  else{
   if(input.jump&&p.grounded&&!this.dialogue){p.vy=-510;p.grounded=false;this.emit('jump');}
   const previous=p.y,previousX=p.x;p.x=clamp(p.x+p.vx*dt,40,WORLD-40);if(p.ghost){p.y=FLOOR-28+Math.sin(this.clock*3)*5;p.grounded=true;}else{p.vy+=1150*dt;p.y+=p.vy*dt;p.grounded=false;for(const platform of this.platforms)if(p.x>platform.x-15&&p.x<platform.x+platform.w+15&&previous<=platform.y+1&&p.y>=platform.y&&p.vy>=0){p.y=platform.y;p.vy=0;p.grounded=true;break;}if(p.y>FLOOR){p.y=FLOOR;p.vy=0;p.grounded=true;}for(const b of this.platforms.slice(3))if(p.y>b.y+5&&p.x+20>b.x&&p.x-20<b.x+b.w)p.x=previousX;}
  }
  for(const a of Object.values(this.npcs)){
   if(!a.alive||!a.visible)continue;a.anim+=dt;if(a.id===p.id){a.x=p.x;a.y=p.y;continue;}if(a.onTank){a.x=this.tank.x;a.y=FLOOR-95;continue;}if(a.restrained||a.pinned)continue;
   if(['follow','escape'].includes(s.kind)&&a.id===s.who&&Math.abs(p.x-a.x)<340)a.goal=s.path[this.pathIndex].x;
   if((s.foes||[]).includes(a.id)&&a.id!==p.id){a.goal=p.x+(a.id==='TEX'?220:330);a.shoot-=dt;if(a.shoot<=0){a.shoot=1.5;this.projectiles.push({x:a.x,y:a.y-62,vx:Math.sign(p.x-a.x)*510,vy:0,kind:'hostile',life:3,owner:a.id});}}
   const delta=a.goal-a.x;a.moving=Math.abs(delta)>8;if(a.moving){a.face=Math.sign(delta);a.x+=a.face*Math.min(Math.abs(delta),dt*(s.kind==='escape'?230:175));}a.y=FLOOR;for(const b of this.platforms.slice(3))if(a.moving&&Math.abs(a.x-(b.x+b.w/2))<b.w/2+60)a.y=FLOOR-80*Math.cos((a.x-(b.x+b.w/2))/(b.w/2+60)*Math.PI/2);
  }
  if(this.radioLines?.length&&!this.dialogue){this.radioClock-=dt;if(this.radioClock<=0){this.radioLine=this.radioLines.shift();this.radioClock=Math.max(3.5,this.radioLine.text.length*.05);this.emit('line',this.radioLine);}}else if(!this.radioLines?.length){this.radioClock-=dt;if(this.radioClock<0)this.radioLine=null;}
  // Projectile collision uses swept segments to prevent fast rounds tunnelling through actors.
  for(let i=this.projectiles.length-1;i>=0;i--){const b=this.projectiles[i];b.px=b.x;b.py=b.y;b.life-=dt;if(b.kind==='grenade')b.vy+=850*dt;b.x+=b.vx*dt;b.y+=b.vy*dt;let remove=false;
   if(b.kind==='hostile'){if(segmentHits(b,p.x-24,p.y-(p.crouch?48:95),48,p.crouch?48:95)){this.damage(8);remove=true;}}
   if(b.kind==='bullet'){
    if(s.kind==='tankPractice')for(const t of this.targets)if(t.hp&&segmentHits(b,t.x-25,t.y-35,50,70)){t.hp=0;this.progress++;remove=true;this.emit('target');}
    for(const id of s.targets||[]){const a=this.npcs[id];if(!a.pinned&&segmentHits(b,a.x-28,a.y-92,56,92)){this.pin(a,34);remove=true;break;}}
   }
   if(b.kind==='grenade'){if(s.kind==='storyGrenade'&&segmentHits(b,this.tank.x-130,FLOOR-90,260,90)){this.explode(b);remove=true;}if(b.y>FLOOR-7){b.y=FLOOR-7;b.vy=-Math.abs(b.vy)*.36;b.vx*=.65;}if(b.life<=0){this.explode(b);remove=true;}}
   if(this.stage()!==s)return;if(b.life<=0||b.x<0||b.x>WORLD||remove)this.projectiles.splice(i,1);
  }
  if(s.tankFire&&!this.tank.disabled){if(Math.floor(this.elapsed/2)!==Math.floor((this.elapsed-dt)/2)){this.hazards.push({x:p.x+(this.random()-.5)*240,y:FLOOR,life:1.1});this.emit('cannon');}}
  for(let i=this.hazards.length-1;i>=0;i--){const h=this.hazards[i];h.life-=dt;if(h.life<=0){this.emit('explosion',{x:h.x,y:FLOOR});this.particles.push({x:h.x,y:FLOOR,kind:'blast',life:.6});if(Math.abs(p.x-h.x)<65&&!p.crouch)this.damage(16);this.hazards.splice(i,1);}}
  for(const q of this.particles)q.life-=dt;this.particles=this.particles.filter(q=>q.life>0);
  if(['follow','escape'].includes(s.kind)){const a=this.npcs[s.who],goal=s.path[this.pathIndex];if(Math.abs(a.x-goal.x)<35&&Math.abs(p.x-a.x)<180){this.pathIndex++;if(this.pathIndex>=s.path.length){this.complete();return;}}}
  if(s.kind==='drive'&&this.mounted&&Math.abs(this.car.x-s.points[this.pathIndex].x)<110){this.pathIndex++;this.emit('checkpoint');if(this.pathIndex>=s.points.length){this.complete();return;}}
  if(s.kind==='survive'&&Math.abs(p.x-s.point.x)<460){this.hold+=dt;if(this.hold>=s.seconds){this.complete();return;}}
  if(s.kind==='work'&&input.use&&Math.abs(p.x-s.point.x)<180&&Math.abs(this.npcs[s.who].x-s.point.x)<100){this.hold+=dt;if(this.hold>=s.seconds){this.event('repairSheila');this.complete();return;}}
  if((s.kind==='suppress'&&this.progress>=s.targets.length)||(s.kind==='tankPractice'&&this.progress>=3)){this.complete();return;}
  this.cam+=(clamp(p.x-600,0,WORLD-1280)-this.cam)*Math.min(1,dt*5);
 }
}
export function segmentHits(b,x,y,w,h){const dx=b.x-b.px,dy=b.y-b.py;let lo=0,hi=1;for(const [p,q]of[[-dx,b.px-x],[dx,x+w-b.px],[-dy,b.py-y],[dy,y+h-b.py]]){if(p===0){if(q<0)return false;}else{const r=q/p;if(p<0)lo=Math.max(lo,r);else hi=Math.min(hi,r);if(lo>hi)return false;}}return true;}
