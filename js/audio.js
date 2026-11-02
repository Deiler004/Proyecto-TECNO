export class AudioFX{
  constructor(){this.ctx=null;this.enabled=true;this.musicTimer=null;this.note=0;}
  init(){if(!this.ctx){const C=window.AudioContext||window.webkitAudioContext;if(C)this.ctx=new C();}if(this.ctx?.state==='suspended')this.ctx.resume();}
  tone(freq=440,duration=.12,type='sine',volume=.06,delay=0){if(!this.enabled)return;this.init();if(!this.ctx)return;const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(volume,this.ctx.currentTime+delay);g.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+delay+duration);o.connect(g);g.connect(this.ctx.destination);o.start(this.ctx.currentTime+delay);o.stop(this.ctx.currentTime+delay+duration);}
  play(kind){const seq={jump:[[340,.09]],coin:[[760,.07],[1020,.12]],block:[[250,.1,'square']],correct:[[520,.1],[700,.12],[900,.18]],wrong:[[220,.17]],level:[[500,.12],[680,.12],[880,.25]],badge:[[660,.1],[880,.1],[1100,.22]],win:[[523,.14],[659,.14],[784,.14],[1046,.36]]};for(const [i,n]of(seq[kind]||[]).entries())this.tone(n[0],n[1],n[2]||'sine',.055,i*.09);}
  toggle(){this.enabled=!this.enabled;return this.enabled;}
}
