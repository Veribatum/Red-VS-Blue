import {characters} from './campaign.js?v=s1-touch-02';import {FLOOR,WORLD} from './model.js?v=s1-touch-02';
const assets={};export async function loadAssets(load=async url=>{const im=new Image();im.src=url.href;await im.decode();return im;}){await Promise.all([...Object.keys(characters).filter(id=>characters[id].x!==undefined).map(id=>id.toLowerCase()),'donut_pink','canyon','vehicles'].map(async name=>{assets[name]=await load(new URL('../assets/'+name+'.svg',import.meta.url));}));return assets;}
const color=id=>characters[id]?.color||'#b4c5d3';
export class Renderer{
 constructor(canvas){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.pointer=null;}
 resize(){const dpr=Math.min(devicePixelRatio||1,2);this.canvas.width=Math.round(this.canvas.clientWidth*dpr);this.canvas.height=Math.round(this.canvas.clientHeight*dpr);}
 screen(clientX,clientY){const r=this.canvas.getBoundingClientRect(),scale=Math.min(r.width/1280,r.height/720);return {x:(clientX-r.left-(r.width-1280*scale)/2)/scale,y:(clientY-r.top-(r.height-720*scale)/2)/scale};}
 rect(x,y,w,h,fill,stroke){const c=this.ctx;c.fillStyle=fill;c.fillRect(x,y,w,h);if(stroke){c.strokeStyle=stroke;c.lineWidth=2;c.strokeRect(x,y,w,h);}}
 text(t,x,y,size=16,fill='#e9efe9',align='left'){const c=this.ctx;c.font=`${size>=25?'900':'600'} ${size}px system-ui`;c.fillStyle=fill;c.textAlign=align;c.fillText(t,x,y);}
 base(x,id){const c=this.ctx,col=id==='RED'?'#b95351':'#4e8bac';this.rect(x-165,449,330,91,'#4b5e60','#253e48');c.fillStyle='#647678';c.beginPath();c.moveTo(x-187,451);c.lineTo(x-140,392);c.lineTo(x+140,392);c.lineTo(x+187,451);c.fill();this.rect(x-80,473,90,67,'#1d3442');this.rect(x-145,450,290,10,col);this.rect(x+50,476,73,24,col);this.rect(x-175,410,12,130,'#354b50');this.rect(x+163,410,12,130,'#354b50');this.rect(x+150,342,5,53,'#92a7a3');this.rect(x+155,346,55,30,col);this.text(id+' BASE',x,436,23,'#e1e6dd','center');this.text(id==='RED'?'AUTHORIZED LOITERING':'PLEASE KEEP THE FLAG',x,464,10,'#c7d7d3','center');}
 actor(a,g,player=false){
  if(!a.visible&&!player)return;const c=this.ctx;let sprite=(a.id==='DONUT'&&(a.pink||g.chapter.pink)?'donut_pink':a.disguise?'tex':a.id.toLowerCase());const im=assets[sprite];if(!im)return;
  let frame=0;if(a.moving||(player&&Math.abs(a.vx)>5))frame=Math.floor(g.clock*10)%6;else if(a.pose==='command'||a.pose==='argue')frame=6;else if(a.pose==='sleep')frame=7;else if(a.pose==='wave')frame=8;else if(a.pose==='work')frame=9;else if(a.pose==='kneel'||(player&&a.crouch))frame=10;else if(a.onTank)frame=11;
  const who=g.dialogue?.lines[g.dialogue.index]?.who||g.radioLine?.who;if(who===a.id||a.possessed&&who==='CHURCH')frame=g.clock%1>.5?6:8;
  c.save();c.translate(a.x,a.y);if(!a.alive&&!player){c.rotate(Math.PI/2);c.translate(-30,10);}c.scale(a.face||1,1);if(a.ghost){c.globalAlpha=.55;c.shadowColor='#9adaef';c.shadowBlur=14;}if(player&&a.hurt>0)c.globalAlpha=Math.floor(g.clock*30)%2?.3:1;c.drawImage(im,frame*96,0,96,128,-39,-94,79,105);c.restore();
  if(player){this.text(a.id+(a.ghost?' / GHOST':''),a.x,a.y-112,11,'#ffdc96','center');}else if(a.alive){this.text(a.possessed?'CHURCH → '+a.id:a.id,a.x,a.y-108,10,color(a.id),'center');}
  if(g.story.flag&&a.id==='DONUT'){this.rect(a.x-29,a.y-125,4,90,'#ddd6be');this.rect(a.x-27,a.y-124,35,25,'#4bafe0');}
  if(a.restrained){c.strokeStyle='#95b3b8';c.lineWidth=3;c.beginPath();c.moveTo(a.x-20,a.y-55);c.lineTo(a.x+20,a.y-48);c.stroke();}
 }
 draw(g){
  const c=this.ctx,{width:w,height:h}=this.canvas,scale=Math.min(w/1280,h/720);c.setTransform(1,0,0,1,0,0);c.fillStyle='#101d2b';c.fillRect(0,0,w,h);c.translate((w-1280*scale)/2,(h-720*scale)/2);c.scale(scale,scale);c.save();c.beginPath();c.rect(0,0,1280,720);c.clip();
  const cam=g.mode==='menu'?600:g.cam||0;c.drawImage(assets.canyon,-(cam*.18)%1600,0,1600,600);c.drawImage(assets.canyon,1600-(cam*.18)%1600,0,1600,600);
  c.save();c.translate(-cam,0);this.rect(0,FLOOR,WORLD,180,'#6b7255');this.rect(0,FLOOR,WORLD,12,'#bdb38b');for(let x=0;x<WORLD;x+=42){this.rect(x,FLOOR+25,16,3,'#505f4c');this.rect(x+13,FLOOR+47,24,2,'#85936d');}
  this.base(800,'RED');this.base(2700,'BLUE');for(const b of g.platforms?.slice(3)||[{x:1120,y:490,w:110,h:50}]){this.rect(b.x,b.y,b.w,b.h,'#6e7c68','#344d50');this.rect(b.x+5,b.y+7,b.w-10,6,'#abb79a');for(let j=12;j<b.w;j+=30)this.rect(b.x+j,b.y+18,3,b.h-22,'#4e6357');}
  for(let x of[870,1500,2420]){this.rect(x,451,5,89,'#7b8b79');this.rect(x-35,457,75,28,'#d8c9a1','#536b65');this.text(x===1500?'NO REFUNDS':x===870?'STORE? →':'← DEFINITELY A BASE',x+2,474,8,'#273e45','center');}
  if(g.chapter){
   if(g.chapter.tank){c.save();c.translate(g.tank.x,g.tank.y);if(g.tank.disabled)c.rotate(-.1);c.drawImage(assets.vehicles,295,0,315,200,-145,-134,290,184);c.restore();this.text('SHEILA',g.tank.x,FLOOR-146,13,'#d5e7b4','center');if(g.tank.broken||g.tank.disabled){this.text('⚠',g.tank.x,FLOOR-176,28,'#ffcda2','center');}}
   c.drawImage(assets.vehicles,0,0,265,200,g.car.x-104,FLOOR-123,217,164);
   if(g.chapter.body){this.actor({id:'CHURCH',x:2188,y:FLOOR,alive:false,visible:true,face:1},g);}
   for(const item of g.items)if(!item.done){if(/FLAG/.test(item.type)){this.rect(item.x,item.y-125,5,125,'#dce4d8');this.rect(item.x+5,item.y-125,50,35,'#60bced');}else{this.rect(item.x-18,item.y-36,36,36,'#708b83','#233e4a');this.rect(item.x-12,item.y-29,24,14,'#80d3ca');}this.text(item.type,item.x,item.y-145,12,'#ffe5ac','center');}
   for(const a of Object.values(g.npcs))if(a.id!==g.player.id)this.actor(a,g);this.actor({...g.player,visible:true,alive:true,pose:g.dialogue?'argue':'idle'},g,true);
   for(const t of g.targets||[])if(g.stage().kind==='tankPractice'&&t.hp){this.rect(t.x-25,t.y-35,50,70,'#afc2b4','#3d5664');c.strokeStyle='#e9765d';c.lineWidth=4;c.beginPath();c.arc(t.x,t.y,18,0,7);c.stroke();}
   for(const h of g.hazards){c.fillStyle='#ff705348';c.fillRect(h.x-65,FLOOR-5,130,6);this.text('INCOMING',h.x,FLOOR-18,12,'#ffb196','center');}
   for(const b of g.projectiles){c.fillStyle=b.kind==='hostile'?'#ff9679':b.kind==='grenade'?'#8ffff0':'#ffe5b1';c.beginPath();c.arc(b.x,b.y,b.kind==='grenade'?6:3,0,7);c.fill();}
   for(const q of g.particles){c.fillStyle='#ffd68c';c.globalAlpha=q.life/.7;c.beginPath();c.arc(q.x,q.y-35,(.7-q.life)*110+10,0,7);c.fill();c.globalAlpha=1;}
   const nav=g.navigation();if(nav&&!g.dialogue){c.strokeStyle='#edca83';c.lineWidth=2;c.setLineDash([4,6]);c.beginPath();c.ellipse(nav.x,FLOOR-2,45,8,0,0,7);c.stroke();c.setLineDash([]);this.text('▼',nav.x,nav.y-155-Math.sin(g.clock*4)*5,25,'#ffe2a3','center');}
   if(g.stage().kind==='storyGrenade'){this.text('THROW FROM HERE',g.stage().point.x,FLOOR-15,12,'#ffe2a3','center');c.strokeStyle='#a4f0d8';c.setLineDash([5,10]);c.beginPath();let x=g.player.x+g.player.face*25,y=g.player.y-60,vx=g.aim.x/(Math.hypot(g.aim.x,g.aim.y)||1)*900,vy=-350+g.aim.y/(Math.hypot(g.aim.x,g.aim.y)||1)*200;c.moveTo(x,y);for(let t=0;t<1.4;t+=.05)c.lineTo(x+vx*t,y+vy*t+425*t*t);c.stroke();c.setLineDash([]);}
  }
  c.restore();if(g.chapter&&g.mode==='play'){const nav=g.navigation();if(nav&&(nav.x-cam<40||nav.x-cam>1240)){const left=nav.x-cam<40;this.rect(left?12:1138,315,130,50,'#183746dc');this.text((left?'← ':'')+Math.round(Math.abs(nav.x-g.player.x)/10)+' m'+(left?'':' →'),left?77:1203,346,20,'#ffdda5','center');}}
  if(this.pointer&&g.mode==='play'){c.strokeStyle='#f7e8cc';c.lineWidth=2;c.beginPath();c.arc(this.pointer.x,this.pointer.y,9,0,7);c.moveTo(this.pointer.x-15,this.pointer.y);c.lineTo(this.pointer.x+15,this.pointer.y);c.moveTo(this.pointer.x,this.pointer.y-15);c.lineTo(this.pointer.x,this.pointer.y+15);c.stroke();}
  c.restore();
 }
}
