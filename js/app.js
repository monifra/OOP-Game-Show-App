/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;
const resetButton = document.querySelector('#overlay button');
const keyboard = document.querySelector('#qwerty');
const keyboardButtons = document.querySelectorAll('#qwerty button');
let existingPhrase = document.querySelectorAll('ul li');

resetButton.addEventListener('click',(e)=>{
    if(existingPhrase){
        const existingPhraseParent = document.querySelector('#phrase ul');
        existingPhrase = document.querySelectorAll('ul li');
        existingPhrase.forEach(letter=>{ 
        existingPhraseParent.removeChild(letter);
        });
        keyboardButtons.forEach(button=>{
            button.disabled = false;
            button.className = 'key';
        });
        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(heart=>{
            heart.setAttribute('src', 'images/liveHeart.png');
        });
    }
    e.preventDefault();
    game = new Game();
    game.startGame();
});

keyboard.addEventListener('click',(e)=>{
    const clicked = e.target;
    if(clicked.tagName === 'BUTTON'){
        // console.log('it\s working');
        game.handleInteraction(e.target);
    }
});

document.addEventListener('keyup',(e)=>{
    const clicked = e.key;
    console.log(clicked);
    if(clicked === ){
        console.log('it\s working');
        game.handleInteraction(e.target);
    }
});

