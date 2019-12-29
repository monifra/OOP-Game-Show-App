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
                li.className = `hide letter ${letter}`;
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
        const phrase = this.phrase;
        console.log(phrase);
        if(phrase.includes(letter)){
            return true;
        }else{
            return false;
        }    
    };
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const phrase = document.querySelectorAll('.letter');
        phrase.forEach(char =>{
            if( char.textContent === letter){
                char.classList.add('show');
                char.classList.remove('hide');
            }
        });
    };
}