/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;
const resetButton = document.querySelector('#overlay button');

resetButton.addEventListener('click',(e)=>{
    e.preventDefault();
    game = new Game();
    game.startGame();
    
});


// 
//     const buttonsDiv = document.querySelector('#qwerty');
//     buttonsDiv.addEventListener('click',(e)=>{
//         const clickedButton = e.target;
//         const activePhrase = this.phrase;
//         console.log(clickedButton);
//         console.log(activePhrase);
//         if(clickedButton.textContent){
//             return true;
//         }else{
//             return false;
//         }    
// 
//