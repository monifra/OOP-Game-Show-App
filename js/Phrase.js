/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        //select parent div
        const parentDiv = document.querySelector('#phrase');
        const ul = document.querySelector('ul');
        const splitPhrase = this.phrase.split(''); //splits phrase into an array of characters
        console.log(splitPhrase);
        //loops trough an array of letters and append them to the page
        splitPhrase.forEach(letter =>{
            const li = document.createElement('li');
            li.textContent = letter;
            if(! /^[a-z]$/.test(letter)){ //checks if there isn't a letter
                li.className = 'space';
            }else{
                li.className = 'letter';
            }
            ul.appendChild(li);
        });
        console.log(parentDiv);
    }
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        const buttonsDiv = document.querySelector('#qwerty');
        buttonsDiv.addEventListener('click',(e)=>{
            const clickedButton = e.target;
            console.log(clickedButton);
            if(clickedButton.textContent === letter){
                console.log(true);
            }else{
                console.log(false);
            }    
        });
    };
}