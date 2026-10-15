// Mouse can click-to-fire; touch on the world only aims. FIRE owns its own pointer.
export function createAimControls({canvas,fire,isActive,onAim,onFire,onGesture=()=>{},face=()=>1,aim=()=>({x:face(),y:0})}){
 let mouseId=null,lookId=null,fireId=null,origin=null;
 const active=()=>isActive(),prevent=e=>{e.preventDefault?.();e.stopPropagation?.();};
 function capture(el,e){try{el.setPointerCapture(e.pointerId);}catch{}}
 function report(){onFire(mouseId!==null||fireId!==null);fire.classList.toggle('pressed',fireId!==null);}
 function reset(){for(const [el,id]of[[canvas,mouseId],[canvas,lookId],[fire,fireId]])if(id!==null){try{el.releasePointerCapture?.(id);}catch{}}mouseId=lookId=fireId=null;origin=null;report();}
 canvas.addEventListener('pointerdown',e=>{
  if(!active())return;prevent(e);onGesture();
  if(e.pointerType==='mouse'){if(e.button!==0||mouseId!==null)return;mouseId=e.pointerId;}
  else {if(lookId!==null)return;lookId=e.pointerId;}
  capture(canvas,e);onAim({kind:'world',event:e});report();
 });
 canvas.addEventListener('pointermove',e=>{if(!active())return;if(e.pointerType==='mouse'||e.pointerId===lookId)onAim({kind:'world',event:e});});
 function endWorld(e){if(e.pointerId===mouseId)mouseId=null;if(e.pointerId===lookId)lookId=null;report();}
 for(const type of['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(type,endWorld);
 canvas.addEventListener('contextmenu',e=>e.preventDefault());
 fire.addEventListener('pointerdown',e=>{prevent(e);if(!active()||fireId!==null)return;fireId=e.pointerId;const direction=aim(),length=Math.hypot(direction.x,direction.y)||1;origin={x:e.clientX,y:e.clientY,ax:direction.x/length*80,ay:direction.y/length*80};onGesture();capture(fire,e);onAim({kind:'button',x:origin.ax,y:origin.ay});report();});
 fire.addEventListener('pointermove',e=>{if(!active()||e.pointerId!==fireId)return;prevent(e);onAim({kind:'button',x:origin.ax+e.clientX-origin.x,y:origin.ay+e.clientY-origin.y});});
 function endFire(e){if(e.pointerId!==fireId)return;fireId=null;origin=null;report();}
 for(const type of['pointerup','pointercancel','lostpointercapture'])fire.addEventListener(type,endFire);
 return {reset};
}
