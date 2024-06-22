document.getElementById('play-button').addEventListener('click', function() {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const duration = 0.5; // Duration of the beep in seconds
    const frequency = 700; // Frequency of the beep in Hz
    const interval = 0.5; // Interval between beeps in seconds
    const numBeeps = 5; // Number of beeps

    function playBeep() {
        const oscillator = context.createOscillator();
        const gainNode = context.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(context.destination);
        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + duration);
        oscillator.stop(context.currentTime + duration);
    }

    for (let i = 0; i < numBeeps; i++) {
        setTimeout(playBeep, i * (duration + interval) * 1000);
    }
});
