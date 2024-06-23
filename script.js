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

// Gestion des boutons de navigation
document.getElementById('interventions-button').addEventListener('click', function() {
    const interventionsSection = document.getElementById('interventions-section');
    interventionsSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('config-button').addEventListener('click', function() {
    const configSection = document.getElementById('configuration-section');
    configSection.scrollIntoView({ behavior: 'smooth' });
});
