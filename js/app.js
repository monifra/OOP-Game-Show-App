/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;
const resetButton = document.querySelector('#overlay button');

resetButton.addEventListener('click',(e)=>{
    e.preventDefault();
    game = new Game();
    game.startGame();
    game.activePhrase.checkLetter('a');
    
});


