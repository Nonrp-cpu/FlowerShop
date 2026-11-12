(function () {
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],K={'Классика':'classic','Авторский букет':'author','Монобукет':'mono'};
const H='<svg class="i"><use href="#heart"/></svg>';let favs=new Set();try{favs=new Set(JSON.parse(localStorage.getItem('bl-fav')||'[]'))}catch(e){}
$('#grid').innerHTML=Object.entries(bouquetDetails).map(([n,d])=>`<article class="card" data-cat="${K[d.cat]}" data-n="${n}" tabindex="0" role="button" aria-label="Подробнее о букете ${n}"><div class="ph"><img loading="lazy" src="${d.img.replace('w=1100','w=800')}" alt="${n}"><span class="tag">${d.cat}</span><button class="fav" aria-label="В избранное" aria-pressed="false">${H}</button></div><div class="ci"><div><h3>${n}</h3><p>${d.lead}</p></div><b class="pr">${d.price}</b></div></article>`).join('');
let flt='all';function show(f){flt=f;$$('.fl').forEach(b=>b.classList.toggle('on',b.dataset.f===f));$$('.card').forEach(c=>c.style.display=f==='all'||c.dataset.cat===f||(f==='fav'&&favs.has(c.dataset.n))?'':'none')}
function syncFav(){$('#favN').textContent=favs.size;$$('.card').forEach(c=>c.querySelector('.fav').setAttribute('aria-pressed',favs.has(c.dataset.n)));try{localStorage.setItem('bl-fav',JSON.stringify([...favs]))}catch(e){}if(flt==='fav')show('fav')}
$$('.fl').forEach(b=>b.onclick=()=>show(b.dataset.f));$('#favBtn').onclick=()=>{show('fav');$('#catalog').scrollIntoView()};
const dp=$('#dp'),dov=$('#dov'),set=(id,t)=>$(id).textContent=t;let cur='';
function openB(n){const d=bouquetDetails[n];if(!d)return;cur=n;$('#dimg').src=d.img;$('#dimg').alt='Букет '+n;set('#dcap',n);set('#dcat',d.cat);set('#dtitle',n);set('#dprice',d.price);set('#dlead',d.lead);set('#dcomp',d.composition);set('#dpal',d.palette);set('#dlay',d.layout);set('#docc',d.occasion);set('#dcare',d.care);
$('#dchips').innerHTML=(d.cat==='Монобукет'?['Один сорт','Лаконичный стиль','Сезонный выбор']:d.cat==='Авторский букет'?['Авторская сборка','Сезонные цветы','Мягкая палитра']:['Классический стиль','Сбалансированная форма','Свежие цветы']).map(t=>`<span>${t}</span>`).join('');
dp.classList.add('open');dov.classList.add('open');dp.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';$('#dc').scrollTop=0;dp.scrollTop=0}
function closeB(){dp.classList.remove('open');dov.classList.remove('open');dp.setAttribute('aria-hidden','true');document.body.style.overflow=''}
$('#grid').addEventListener('click',e=>{const c=e.target.closest('.card');if(!c)return;if(e.target.closest('.fav')){const n=c.dataset.n;favs.has(n)?favs.delete(n):favs.add(n);syncFav()}else openB(c.dataset.n)});
$('#grid').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('card')){e.preventDefault();openB(e.target.dataset.n)}});
[dov,$('#dx'),$('#dback')].forEach(el=>el.onclick=closeB);
$$('.toc a').forEach(a=>a.onclick=e=>{e.preventDefault();$(a.getAttribute('href')).scrollIntoView({behavior:'smooth',block:'start'})});
const modal=$('#modal');let sel='';function openM(n){sel=n||'';set('#mtext',n?`Интересует букет «${n}». Оставьте контакт — уточним наличие и состав.`:'Оставьте контакт — перезвоним и ответим на вопросы.');modal.classList.add('open')}
$('#dask').onclick=()=>{closeB();openM(cur)};$$('[data-ask]').forEach(a=>a.onclick=e=>{e.preventDefault();openM()});$('#mx').onclick=()=>modal.classList.remove('open');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeB();modal.classList.remove('open')}});
/* Номер WhatsApp ниже — заглушка, замените на номер магазина */
$('#send').onclick=()=>{const t=`Здравствуйте! Меня интересует ${sel?'букет «'+sel+'»':'ваши букеты'}. Имя: ${$('#nm').value.trim()||'не указано'}. Телефон: ${$('#ph').value.trim()||'не указан'}. ${$('#msg').value.trim()}`;window.open('https://wa.me/70000000000?text='+encodeURIComponent(t),'_blank','noopener')};
$('#burger').onclick=()=>$('#nav').classList.toggle('open');$$('#nav a').forEach(a=>a.onclick=()=>$('#nav').classList.remove('open'));
const t2=$('#top2');addEventListener('scroll',()=>t2.classList.toggle('v',scrollY>450),{passive:true});t2.onclick=()=>scrollTo({top:0,behavior:'smooth'});

initMotion();
})();
