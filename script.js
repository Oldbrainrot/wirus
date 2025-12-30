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
