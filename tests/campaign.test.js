import test from 'node:test';import assert from 'node:assert/strict';import {Game,segmentHits,FLOOR} from '../src/model.js';import {episodes} from '../src/campaign.js';import {readFileSync,existsSync} from 'node:fs';
const advance=(g,n,fn)=>{for(let i=0;i<n&&g.mode==='play';i++)g.update(.05,fn?.()||{});};
function settle(g){g.update(.05);}
function use(g){g.interactCooldown=0;g.interact();}
function stageFinished(g,idx){assert(g.mode==='complete'||g.stageIndex!==idx,`Stuck at E${g.episode+1}.${idx+1}: ${g.stage().title}`);}
test('Season 1 includes 19 chapters, unique story objectives, and first appearances',()=>{
 assert.equal(episodes.length,19);assert.equal(episodes.reduce((n,e)=>n+e.stages.length,0),56);
 episodes.forEach((e,i)=>{assert.equal(e.id,i+1);assert.equal(e.roster.includes('TEX'),i>=9);assert.equal(e.roster.includes('CABOOSE'),i>=2);assert(!e.roster.includes('DOC'));assert(e.stages.every(s=>s.title&&s.kind));});
 const source=readFileSync(new URL('../src/campaign.js',import.meta.url),'utf8');for(const e of ['churchKilled','texCaptured','releaseTex','sargeShot','voiceCardSpark','possessLopez','texDies','aiEscape'])assert(source.includes(e));
});
test('Every objective can complete through its required interaction or physics',()=>{
 const pinned=[];const g=new Game({random:()=>0,onEvent:e=>{if(e.type==='pinned')pinned.push(e.id)}});let count=0;
 for(let chapter=0;chapter<19;chapter++){
  g.start(chapter);let guard=0;
  while(g.mode==='play'&&guard++<60){const s=g.stage(),idx=g.stageIndex;count++;
   if(s.kind==='scene'){g.player.x=s.point.x;use(g);assert(g.dialogue);let lineGuard=0;while(g.stageIndex===idx&&g.mode==='play'&&lineGuard++<30){use(g);} }
   else if(s.kind==='collect'){for(const item of g.items){g.player.x=item.x;g.player.y=item.y;use(g);}}
   else if(s.kind==='follow'||s.kind==='escape'){
    // The player is the guide in Donut/Church chapters; walking reaches each waypoint.
    for(const dest of s.path){for(let j=0;j<1800&&g.stageIndex===idx&&Math.abs(g.player.x-dest.x)>22;j++){const move=Math.sign(dest.x-g.player.x);g.update(.05,{move,jump:g.player.grounded});}}
    advance(g,20);
   }
   else if(s.kind==='drive'){g.player.x=g.car.x;use(g);assert.equal(g.mounted,'car');for(const dest of s.points){for(let j=0;j<1800&&g.stageIndex===idx&&g.pathIndex<s.points.indexOf(dest)+1;j++)g.update(.05,{move:Math.sign(dest.x-g.car.x)});}}
   else if(s.kind==='survive'){g.player.x=s.point.x;for(let j=0;j<1200&&g.stageIndex===idx&&g.mode==='play';j++)g.update(.05,{crouch:true});}
   else if(s.kind==='suppress'){for(const [n,id]of s.targets.entries()){const a=g.npcs[id];a.x=1400+n*150;a.goal=a.x;g.player.x=a.x-150;g.player.y=FLOOR;g.aim={x:1,y:0};for(let hit=0;hit<3;hit++){g.player.shoot=0;g.fire();advance(g,4);}assert(pinned.includes(id),id+' must actually be hit');assert(a.alive);}g.update(.05);}
   else if(s.kind==='tankPractice'){for(let k=0;k<500&&g.stageIndex===idx;k++)g.update(.05,{fire:true});}
   else if(s.kind==='possess'){g.player.x=g.npcs[s.who].x;use(g);assert(g.story.possessSarge);}
   else if(s.kind==='revive'){g.player.x=g.npcs[s.who].x;use(g);use(g);use(g);assert(g.npcs.SARGE.alive);}
   else if(s.kind==='work'){g.player.x=s.point.x;for(let k=0;k<1200&&g.stageIndex===idx;k++)g.update(.05,{use:true});assert(g.story.repairSheila);}
   else if(s.kind==='storyGrenade'){g.player.x=s.point.x;g.player.y=FLOOR;g.aim={x:1,y:0};g.grenade();for(let k=0;k<100&&g.stageIndex===idx;k++)g.update(.05);assert(g.tank.disabled);}
   else throw Error('No test for '+s.kind);
   stageFinished(g,idx);
  }
  assert.equal(g.mode,'complete','chapter '+(chapter+1));
  if(chapter===7)assert.equal(g.npcs.CHURCH.alive,false);
  if(chapter===11){assert(g.npcs.TEX.restrained);assert.equal(g.npcs.DONUT.visible,false);}
  if(chapter===13){assert(!g.npcs.SARGE.alive);assert(g.npcs.CHURCH.visible);assert(!g.npcs.TEX.restrained);}
  if(chapter===15)assert(g.npcs.LOPEZ.speaksSpanish);
  if(chapter===18){assert(!g.npcs.TEX.alive);assert(g.npcs.CABOOSE.ai);}
 }
 assert.equal(count,56);
});
test('Checkpoint retry reconstructs prior canon events and possession',()=>{
 const g=new Game();g.start(13,2);assert(g.npcs.SARGE.possessed);assert(!g.npcs.CHURCH.visible);assert.equal(g.player.id,'SARGE');g.start(11,3);assert(g.npcs.TEX.restrained);assert(!g.npcs.DONUT.visible);const x=g.npcs.TEX.x;advance(g,30);assert.equal(g.npcs.TEX.x,x);
});
test('Pause freezes movement, cannon hazards and dialogue',()=>{const g=new Game();g.start(7);g.paused=true;const x=g.player.x;advance(g,100,()=>({move:1,fire:true}));assert.equal(g.player.x,x);assert.equal(g.elapsed,0);assert.equal(g.projectiles.length,0);});
test('Jumping, cover platforms, reload and missed throws remain playable',()=>{
 const g=new Game();g.start(18,2);g.player.x=1100;g.update(.05,{move:1});assert(g.player.x<=1100);g.update(.05,{jump:true,move:1});advance(g,12,()=>({move:1}));assert(g.player.x>1100);g.player.ammo=0;g.fire();assert(g.player.reload>0);advance(g,25);assert.equal(g.player.ammo,24);g.aim={x:-1,y:0};g.grenade();advance(g,100);assert(g.player.throw<=0,'a miss must not soft-lock the final throw');
});
test('Swept collision catches fast projectiles',()=>{assert(segmentHits({px:0,py:10,x:1000,y:10},450,0,10,20));assert(!segmentHits({px:0,py:30,x:1000,y:30},450,0,10,20));});
test('Asset references exist, sprite sheets have all 12 animation frames',()=>{for(const name of ['sarge','grif','simmons','donut','donut_pink','church','tucker','caboose','lopez','tex']){const path=new URL('../assets/'+name+'.svg',import.meta.url);assert(existsSync(path));const svg=readFileSync(path,'utf8');assert(svg.includes('width="1152"'));assert.equal((svg.match(/transform="translate\(/g)||[]).filter(()=>true).length,72);}});
