/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;
const resetButton = document.querySelector('#overlay button');
const keyboard = document.querySelector('#qwerty');

resetButton.addEventListener('click',(e)=>{
    e.preventDefault();
    game = new Game();
    game.startGame();
});

keyboard.addEventListener('click',(e)=>{
    const clicked = e.target;
    if(clicked.tagName === 'BUTTON'){
        console.log('it\s working');
        game.handleInteraction(e.target);
    }
});


