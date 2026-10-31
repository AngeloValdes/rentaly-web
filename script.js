// Instagram does not support reliably prepopulating DM text from a public URL.
// Copy the contextual message on click, then open the Rentaly conversation.
const RENTALY_DM = 'https://www.instagram.com/direct/t/17848942698344590/?hl=es';
function showCopyNotice(message){
 let el=document.getElementById('ig-copy-notice');
 if(!el){el=document.createElement('div');el.id='ig-copy-notice';el.setAttribute('role','status');el.className='ig-copy-notice';document.body.appendChild(el);}
 el.textContent=message;el.classList.add('visible');
 clearTimeout(window._rentalyNoticeTimer);window._rentalyNoticeTimer=setTimeout(()=>el.classList.remove('visible'),6500);
}
document.querySelectorAll('[data-ig-message]').forEach(el=>el.addEventListener('click',async event=>{
 event.preventDefault();
 const message=el.getAttribute('data-ig-message')||'Hola Rentaly, quiero cotizar sus servicios.';
 // Open synchronously to avoid popup blockers; copy independently.
 const popup=window.open(RENTALY_DM,'_blank','noopener,noreferrer');
 if(!popup) window.location.href=RENTALY_DM;
 try{await navigator.clipboard.writeText(message);showCopyNotice('Mensaje copiado. Pégalo en el chat de Instagram y envíalo.');}
 catch(e){showCopyNotice('Instagram abierto. Escribe tu consulta en el mensaje directo.');}
}));
const btn=document.querySelector('.menu-btn'),menu=document.querySelector('#menu');
if(btn&&menu){const close=()=>{menu.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.textContent='☰'};btn.addEventListener('click',()=>{const open=menu.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));btn.textContent=open?'×':'☰'});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));window.addEventListener('resize',()=>{if(window.innerWidth>760)close()});}
