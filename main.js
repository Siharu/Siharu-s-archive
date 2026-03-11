// --- CONNECTING OVERLAY ---
window.addEventListener("load", ()=>{
  const boot = document.getElementById("boot");
  if(boot){
    boot.style.opacity="1";
    setTimeout(()=>{
      boot.style.opacity="0";
      setTimeout(()=>{ boot.style.display="none"; },500);
    },1800);
  }
});

// --- TERMINAL TEXT GLITCH ---
const terminal = document.querySelector('.terminal-text');
if(terminal){ terminal.classList.add('glitching'); }

// --- RANDOM PAGE GLITCH ---
setInterval(()=>{
  document.body.style.transform=`translate(${Math.random()*4-2}px,${Math.random()*4-2}px)`;
  setTimeout(()=>{document.body.style.transform="";},120);
},7000);

// --- CLICK GLITCH ---
document.querySelectorAll(".art-card, .btn-access").forEach(el=>{
  el.addEventListener("click", ()=>{
    el.classList.add("glitch");
    setTimeout(()=>{ el.classList.remove("glitch"); },250);
  });
});