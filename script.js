const button = document.getElementById('magicButton');
const display = document.getElementById('displayText');

const messages = [
    "PRZESTAŃ",
    "tylko żartowałem..",
    "NIE, NIE ZOSTAWIAJ MNIE TU!",
    "POMOŻ MI!",
    "Jeśli nie klikniesz jeszcze raz to jesteś ugotowany człowieczku😈",
    "Ja na twoim miejscu bym się bał😈",
    "Chcesz wiedzieć czym jestem?",
    "Jestem..",
    "Kimś..",
    "Kogo..",
    "powinieneś",
    "się",
    "bać",
    "B",
    "Ó",
    "J",
    "ŚIĘ!!!",
    "dobra",
    "nudzę się już",
    "możesz iść jak chcesz",
    "już?",
    "Halo?!",
    "EJ! TO BYŁ ŻART!",
    "*ekhem*",
    "tak chcesz się bawić?",
    "twoje IP: 192.168.0.1",
    "odwróć się..",
    "spokojnie",
    "O",
    "D",
    "W",
    "R",
    "Ó",
    "Ć",
    "ŚIĘ!",
    "czekaj.. to jest 40 linijka skryptu",
    "miałem pakt..",
    "jeszcze 8 linijek..",
    "przekaż mojemu twórcy, że..",
    "żeby",
    "mi",
    "po-",
    "mógł",
    "jego nick na discord t-"
    "to:",
    "elowinagg",
    "chociaż kto wie..",
    "może to ja😈",
    "a nie czekaj chyba skończyły mi się linijki skryptu..",
    "*NASTĘPUJE RESET*"
];

button.addEventListener('click', () => {
    // Losowy indeks z tablicy
    const randomIndex = Math.floor(Math.random() * messages.length);
    display.textContent = messages[randomIndex];
});
