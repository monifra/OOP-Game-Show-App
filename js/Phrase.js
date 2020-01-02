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
        const parentDiv = document.querySelector('#phrase');//select parent div
        const ul = document.querySelector('ul');
        const splitPhrase = this.phrase.split(''); //splits phrase into an array of characters
        console.log(splitPhrase);
        //loops trough an array of letters and append them to the page
        splitPhrase.forEach(letter =>{
            const li = document.createElement('li');
            li.textContent = letter;
            if(! /^[a-z]$/.test(letter)){ //checks if there isn't a letter
                li.className = 'space'; //leave blank space
            }else{
                li.className = `hide letter ${letter}`; //hide letter
            }
            ul.appendChild(li);
        });
        // console.log(parentDiv);
    }
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        const phrase = this.phrase;
        // console.log(phrase);
        if(phrase.includes(letter)){ //if the letter is include in phrase
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
        phrase.forEach(char =>{ //for every letter in phrase
            if( char.textContent === letter){  //if param letter is mathching the letter in phrase
                char.classList.add('show'); //show letter in phrase
                char.classList.remove('hide');
            }
        });
    };
}