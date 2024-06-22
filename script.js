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
