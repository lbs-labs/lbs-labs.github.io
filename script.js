
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':'';});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');document.body.style.overflow='';menuBtn?.setAttribute('aria-expanded','false');}));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
