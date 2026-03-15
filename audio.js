const trackLament = document.getElementById('track-lament');
const trackKage = document.getElementById('track-kage');
let isTrack1 = true;

function playAnotherSkyAudio() {
    if (trackLament && trackKage) {
        trackLament.volume = 0.6;
        trackKage.volume = 0.6;
        trackLament.play();
        document.getElementById('play-pause-btn').innerText = "PAUSE";
    }
}

function togglePlayback() {
    const activeTrack = isTrack1 ? trackLament : trackKage;
    const btn = document.getElementById('play-pause-btn');
    if (activeTrack.paused) {
        activeTrack.play();
        btn.innerText = "PAUSE";
    } else {
        activeTrack.pause();
        btn.innerText = "PLAY";
    }
}

function switchTrack() {
    trackLament.pause();
    trackKage.pause();
    trackLament.currentTime = 0;
    trackKage.currentTime = 0;

    isTrack1 = !isTrack1;
    const activeTrack = isTrack1 ? trackLament : trackKage;
    activeTrack.play();
    
    document.getElementById('current-track-name').innerText = isTrack1 ? "SIGNAL: LAMENT" : "SIGNAL: KAGE";
    document.getElementById('play-pause-btn').innerText = "PAUSE";
}

function stopAnotherSkyAudio() {
    [trackLament, trackKage].forEach(t => {
        t.pause();
        t.currentTime = 0;
    });
}