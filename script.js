document.getElementById('play-button').addEventListener('click', function() {
    const audio = document.getElementById('beep-sound');
    audio.play();
    addIntervention();
});

function addIntervention() {
    const interventionsList = document.getElementById('interventions-list');
    const interventionItem = document.createElement('li');
    const currentTime = new Date().toLocaleString();
    interventionItem.textContent = `Intervention à ${currentTime}`;
    interventionsList.appendChild(interventionItem);
}

// Gestion de la configuration
document.getElementById('save-config').addEventListener('click', function() {
    const frequency = document.getElementById('frequency').value;
    alert(`Configuration sauvegardée: Fréquence ${frequency} Hz`);
    // Sauvegarder la configuration si nécessaire
});

// Gestion du menu (optionnel, pour faire défiler vers les sections)
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
