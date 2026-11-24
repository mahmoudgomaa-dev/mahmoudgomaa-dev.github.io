const S=window.SITE||{};
document.getElementById('y').textContent=new Date().getFullYear();
const m=document.getElementById('mail'),g=document.getElementById('gh');
if(S.email)m.href='mailto:'+S.email;else m.style.display='none';
if(S.github)g.href=S.github;else g.style.display='none';
const L=document.getElementById('project-list');
(window.PROJECTS||[]).forEach(p=>{
  const a=document.createElement('article');a.className='card';
  const h=document.createElement('h3');h.textContent=p.title;
  const d=document.createElement('p');d.textContent=p.desc;
  a.append(h,d);
  if(p.tags){const t=document.createElement('div');t.className='t';p.tags.forEach(x=>{const s=document.createElement('span');s.textContent=x;t.append(s)});a.append(t)}
  if(p.link){const l=document.createElement('a');l.href=p.link;l.textContent='View project →';l.target='_blank';l.rel='noopener';a.append(document.createElement('br'),l)}
  L.append(a);
});
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// background particles
const c=document.getElementById('bg'),x=c.getContext('2d');let W,H,P=[];
function rs(){W=c.width=innerWidth;H=c.height=innerHeight;P=Array.from({length:Math.min(70,W/18|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}))}
rs();addEventListener('resize',rs);
(function f(){x.clearRect(0,0,W,H);P.forEach((p,i)=>{p.x=(p.x+p.vx+W)%W;p.y=(p.y+p.vy+H)%H;x.fillStyle='rgba(124,92,255,.6)';x.fillRect(p.x,p.y,2,2);
for(let j=i+1;j<P.length;j++){const q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){x.strokeStyle='rgba(34,211,238,'+(.15*(1-d/120))+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});requestAnimationFrame(f)})();
