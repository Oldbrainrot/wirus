const button = document.getElementById('magicButton');
const display = document.getElementById('displayText');

const messages = [
    "Cześć! 😊",
    "Masz dziś dobry humor?",
    "Klikasz świetnie!",
    "Kolejny klik!",
    "Nie zatrzymuj się!",
    "Wow, jesteś szybki!",
    "Jeszcze jeden klik?",
    "Super robota!",
    "Klikasz jak mistrz!",
    "Jeszcze trochę i się uda!"
];

button.addEventListener('click', () => {
    // Losowy indeks z tablicy
    const randomIndex = Math.floor(Math.random() * messages.length);
    display.textContent = messages[randomIndex];
});
