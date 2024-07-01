document.body.addEventListener('click', function() {
    var audio = new Audio('/mp3/Pacman-Game-Start-Sound.mp3');
    audio.play();
}, { once: true }); 

/* document.body.addEventListener('click', function() {
    var audio = new Audio('/mp3/Pacman-Game-Start-Sound.mp3');
    audio.play();
}); */

document.getElementById('fantasmito').addEventListener('click', function() {
    this.src = './images/pacman-icon.png';
    this.alt = 'Pac-Man Icon';
});