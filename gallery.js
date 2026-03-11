// --- BOOT OVERLAY ---
window.addEventListener("load", ()=> {
  const boot = document.getElementById("boot");
  if(boot){
    setTimeout(() => {
      boot.style.opacity = "0";
      setTimeout(()=> boot.style.display="none", 500);
    }, 1500);
  }
});

// --- FULLSCREEN VIEWER ---
const viewer = document.getElementById("fullscreen-viewer");
if(viewer){
  const viewerImg = viewer.querySelector("img");
  const closeBtn = viewer.querySelector(".close-viewer");

  document.querySelectorAll(".art-card").forEach(card=>{
    card.addEventListener("click", ()=>{
      const src = card.querySelector("img").src;
      viewerImg.src = src;
      viewer.classList.add("visible");
      viewerImg.style.transform="scale(0.9)";
      setTimeout(()=> viewerImg.style.transform="scale(1)",50);
    });
  });

  closeBtn.addEventListener("click", ()=>{ 
    viewer.classList.remove("visible"); 
    viewer.querySelector("img").style.transform="scale(0.9)"; 
  });

  viewer.addEventListener("click", e=>{ 
    if(e.target===viewer) closeBtn.click(); 
  });
}

// --- RANDOM IMAGE GLITCH ---
document.querySelectorAll('.art-card img').forEach(img => {
  setInterval(() => {
    const glitchType = Math.random() > 0.5 ? 'glitchShift' : 'glitchSlide';
    img.style.animation = `${glitchType} 0.3s ease-in-out 1`;
    setTimeout(()=> img.style.animation='',300);
  }, 3000 + Math.random()*4000);
});

// --- CLICK GLITCH ---
document.querySelectorAll(".art-card").forEach(el=>{
  el.addEventListener("click", ()=>{
    el.classList.add("glitch");
    setTimeout(()=> el.classList.remove("glitch"), 250);
  });
});