/* document.body.addEventListener('click', function() {
    var audio = new Audio('/mp3/Pacman-Game-Start-Sound.mp3');
    audio.play();
}, { once: true });  */

/* document.body.addEventListener('click', function() {
    var audio = new Audio('/mp3/Pacman-Game-Start-Sound.mp3');
    audio.play();
}); */

/* document.getElementById('fantasmito').addEventListener('click', function() {
    this.src = './images/pacman-icon.png';
    this.alt = 'Pac-Man Icon';
}); */


let score = 0;
let intervalId;

document.body.addEventListener('click', function() {
    var audio = new Audio('/mp3/Pacman-Game-Start-Sound.mp3');
    audio.play();
}, { once: true });

document.getElementById('fantasmito').addEventListener('click', function() {
    var fantasmito = this;
    updateScore(100);
    replaceWithPacMan(fantasmito);

    setTimeout(function() {
        let count = 1;
        intervalId = setInterval(function() {
            if (score >= 5000) {
                clearInterval(intervalId);
                alert('GAME OVER');
                return;
            }

            var newImage = document.createElement('img');

            if (count % 4 === 0) {
                newImage.src = './images/cherry.png';
                newImage.alt = 'Cherry';
                newImage.className = 'cherry';
            } else {
                newImage.src = './images/fantasmito.png';
                newImage.alt = 'Fantasmita';
                newImage.className = 'fantasmita';
            }

            newImage.style.cursor = 'pointer';
            newImage.addEventListener('click', function() {
                let points = (this.className === 'cherry') ? 500 : 100;
                updateScore(points);
                replaceWithPacMan(this);
            });

            document.querySelector('.images').appendChild(newImage);
            count++;
        }, 2000);
    }, 2000);
});

function replaceWithPacMan(element) {
    // Find and remove any existing Pac-Man icon
    var existingPacMan = document.querySelector('.pacman-icon');
    if (existingPacMan) {
        existingPacMan.remove();
    }

    // Replace the clicked element with Pac-Man icon
    element.src = './images/pacman-icon.png';
    element.alt = 'Pac-Man Icon';
    element.className = 'pacman-icon';
}

function updateScore(points) {
    score += points;
    document.getElementById('score').textContent = 'Puntos: ' + score;

    if (score >= 5000) {
        clearInterval(intervalId);
        alert('GAME OVER');
    }
}
