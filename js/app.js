/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/***
 Global variables
 */
let game;
const resetButton = document.querySelector('#overlay button');
const keyboard = document.querySelector('#qwerty');
const keyboardButtons = document.querySelectorAll('#qwerty button');
let existingPhrase = document.querySelectorAll('ul li');
/*** 
 Event Handlers
 ***/

/*** 
 Event Handler For start and reset button
 It sets new game and start it.
 Also when used as reset button, this button removes existing old phrase, resets keyboard and resets lifes.
 ***/
resetButton.addEventListener('click',(e)=>{
    if(existingPhrase){ //if phrase exists in DOM remove existing phrase
        const existingPhraseParent = document.querySelector('#phrase ul');
        existingPhrase = document.querySelectorAll('ul li');
        existingPhrase.forEach(letter=>{  //for every letter in phrase
        existingPhraseParent.removeChild(letter); //remove it from parrent 
        });
        keyboardButtons.forEach(button=>{ //for every button
            button.disabled = false; //set disabled to false
            button.className = 'key';//give a button class of key
        });
        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(heart=>{//for every heart 
            heart.setAttribute('src', 'images/liveHeart.png');//make heart live
        });
    }
    e.preventDefault();
    game = new Game(); //sets new game
    game.startGame(); //starts new game
});
/*** 
 Event Handler For game keyboard handling game interactions
 ***/
keyboard.addEventListener('click',(e)=>{
    const clicked = e.target;
    if(clicked.tagName === 'BUTTON'){ //if clicked element is a button
        // console.log('it\s working');
        game.handleInteraction(e.target); //start game interactions
    }
});
/*** 
 Event Handler For real keyboard handling game interactions
 ***/
document.addEventListener('keydown',(e)=>{
    const clicked = e.key;
    keyboardButtons.forEach(button=>{ //for every DOM keyboard button
        if(clicked === button.textContent){ //find which DOM button matches real keyboard button
            game.handleInteraction(button); //handle game interactions on DOM button
        }
    });
});

