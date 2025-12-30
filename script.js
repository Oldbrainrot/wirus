const gameArea = document.getElementById('game-area');
const scoreEl = document.getElementById('score');
let score = 0;

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');

    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    square.style.left = x + 'px';
    square.style.top = y + 'px';

    square.addEventListener('click', () => {
        score++;
        scoreEl.textContent = score;
        gameArea.removeChild(square);
    });

    gameArea.appendChild(square);

    // Square znika po 1.5 sekundy
    setTimeout(() => {
        if (gameArea.contains(square)) {
            gameArea.removeChild(square);
        }
    }, 1500);
}

// Tworzymy nowy kwadrat co 1 sekundę
setInterval(createSquare, 1000);
const gameArea = document.getElementById('game-area');
const scoreEl = document.getElementById('score');

const buySpeedBtn = document.getElementById('buy-speed');
const buyValueBtn = document.getElementById('buy-value');

const speedCostEl = document.getElementById('speed-cost');
const valueCostEl = document.getElementById('value-cost');

let score = 0;
let pointsPerClick = 1;
let spawnInterval = 1000;

let speedCost = 50;
let valueCost = 100;

// Aktualizuj wyświetlacze
function updateUI() {
    scoreEl.textContent = score;
    speedCostEl.textContent = speedCost;
    valueCostEl.textContent = valueCost;
}

// Tworzy kwadrat
function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');

    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    square.style.left = x + 'px';
    square.style.top = y + 'px';

    square.addEventListener('click', () => {
        score += pointsPerClick;
        updateUI();
        gameArea.removeChild(square);
    });

    gameArea.appendChild(square);

    // Usuwa kwadrat po 1.5 sek jeśli nie kliknięty
    setTimeout(() => {
        if (gameArea.contains(square)) {
            gameArea.removeChild(square);
        }
    }, 1500);
}

// Losowe pojawianie się
let spawnTimer = setInterval(createSquare, spawnInterval);

// Sklep: szybsze spawn
buySpeedBtn.addEventListener('click', () => {
    if (score >= speedCost) {
        score -= speedCost;
        spawnInterval = Math.max(200, spawnInterval - 150);
        clearInterval(spawnTimer);
        spawnTimer = setInterval(createSquare, spawnInterval);

        speedCost = Math.floor(speedCost * 1.6);
        updateUI();
    }
});

// Sklep: więcej punktów
buyValueBtn.addEventListener('click', () => {
    if (score >= valueCost) {
        score -= valueCost;
        pointsPerClick++;
        valueCost = Math.floor(valueCost * 1.7);
        updateUI();
    }
});

updateUI();
