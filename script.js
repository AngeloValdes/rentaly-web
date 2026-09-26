const WA='56957589906';
document.querySelectorAll('[data-wa]').forEach(el=>{const msg=encodeURIComponent(el.dataset.wa||'Hola Rentaly, me gustaría conocer más sobre sus servicios.');el.href=`https://wa.me/${WA}?text=${msg}`;el.target='_blank';el.rel='noopener';});
