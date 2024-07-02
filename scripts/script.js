document.body.addEventListener('click', function() {
    var audio = new Audio('/mp3/Pacman-Game-Start-Sound.mp3');
    audio.play();
}, { once: true }); 

/* document.body.addEventListener('click', function() {
    var audio = new Audio('/mp3/Pacman-Game-Start-Sound.mp3');
    audio.play();
}); */

/* document.getElementById('fantasmito').addEventListener('click', function() {
    this.src = './images/pacman-icon.png';
    this.alt = 'Pac-Man Icon';
}); */


document.getElementById('fantasmito').addEventListener('click', function() {
    var fantasmito = this;
    fantasmito.src = './images/pacman-icon.png';
    fantasmito.alt = 'Pac-Man Icon';

    setTimeout(function() {
        fantasmito.style.display = 'none';

        setInterval(function() {
            var newFantasmito = document.createElement('img');
            newFantasmito.src = './images/fantasmito.png';
            newFantasmito.alt = 'Fantasmita';
            newFantasmito.className = 'fantasmita';
            newFantasmito.id = 'fantasmito';
            newFantasmito.style.cursor = 'pointer';

            newFantasmito.addEventListener('click', function() {
                var clickedFantasmito = this;
                clickedFantasmito.src = './images/pacman-icon.png';
                clickedFantasmito.alt = 'Pac-Man Icon';

                setTimeout(function() {
                    clickedFantasmito.style.display = 'none';
                }, 2000); // Pac-Man icon disappears after 2 seconds
            });

            document.querySelector('.container').appendChild(newFantasmito);
        }, 2000);
    }, 2000); // Pac-Man icon disappears after 2 seconds
});
