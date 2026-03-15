function handleStoryClick(card) {
    const box = card.querySelector('.synopsis-box');
    const rainContainer = card.querySelector('.rain-container');
    const flash = document.getElementById('flash-overlay');

    if (box.style.display === 'none' || box.style.display === '') {
        // Flash Effect
        flash.classList.add('thunder-flash');
        setTimeout(() => flash.classList.remove('thunder-flash'), 150);

        // UI Toggle
        box.style.display = 'block';
        card.classList.remove('paper-glitch');

        // Generate Droplets
        for(let i = 0; i < 45; i++) {
            const drop = document.createElement('div');
            drop.className = 'drop';
            drop.style.left = Math.random() * 100 + '%';
            drop.style.animationDuration = (Math.random() * 0.4 + 0.3) + 's';
            drop.style.animationDelay = Math.random() * 2 + 's';
            rainContainer.appendChild(drop);
        }

        if (typeof playAnotherSkyAudio === "function") playAnotherSkyAudio();
    } else {
        box.style.display = 'none';
        rainContainer.innerHTML = ''; 
        card.classList.add('paper-glitch');
        if (typeof stopAnotherSkyAudio === "function") stopAnotherSkyAudio();
    }
}

// Keep locked cards glitching
document.querySelectorAll('.locked').forEach(card => card.classList.add('paper-glitch'));
