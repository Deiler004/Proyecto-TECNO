export class Player {
  constructor(start) { this.x=start.x; this.y=start.y; this.w=34; this.h=48; this.vx=0; this.vy=0; this.onGround=false; this.facing=1; this.walk=0; this.invulnerable=0; }
  reset(start) { this.x=start.x; this.y=start.y; this.vx=0; this.vy=0; this.onGround=false; this.invulnerable=1.2; }
  update(dt,keys,level,cameraX,onBlock,onDamage) {
    const left=keys.has('ArrowLeft')||keys.has('KeyA'), right=keys.has('ArrowRight')||keys.has('KeyD');
    const accel=this.onGround?1800:1050, max=keys.has('ShiftLeft')||keys.has('ShiftRight')?310:245;
    if(left!==right){this.vx+=(right?1:-1)*accel*dt;this.facing=right?1:-1;}else this.vx*=Math.pow(this.onGround?0.001:0.16,dt);
    this.vx=Math.max(-max,Math.min(max,this.vx));
    const jump=keys.has('Space')||keys.has('ArrowUp')||keys.has('KeyW');
    if(jump&&!this.jumpHeld&&this.onGround){this.vy=-780;this.onGround=false;}
    if(jump)this.jumpHeld=true;else this.jumpHeld=false;
    this.vy=Math.min(900,this.vy+1750*dt);
    this.x+=this.vx*dt;
    for(const p of level.platforms){if(p.type==='ground'&&hit(this,p)){if(this.vx>0)this.x=p.x-this.w;else if(this.vx<0)this.x=p.x+p.w;this.vx=0;}}
    const oldY=this.y;this.y+=this.vy*dt;this.onGround=false;
    for(const p of level.platforms){if(hit(this,p)){if(this.vy>=0&&oldY+this.h<=p.y+10){this.y=p.y-this.h;this.vy=0;this.onGround=true;}else if(p.type==='ground'&&this.vy<0&&oldY>=p.y+p.h-5){this.y=p.y+p.h;this.vy=0;}}}
    for(const b of level.blocks){if(hit(this,{x:b.x,y:b.y,w:42,h:42})&&this.vy<0&&oldY>=b.y+35){this.y=b.y+42;this.vy=0;if(!b.used)onBlock(b);}}
    if(this.x<0)this.x=0;
    if(Math.abs(this.vx)>15)this.walk+=dt*Math.abs(this.vx)*.045;
    this.invulnerable=Math.max(0,this.invulnerable-dt);
    if(this.y>800){this.reset({x:Math.max(80,cameraX+100),y:500});onDamage();}
  }
}
export function hit(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;}
