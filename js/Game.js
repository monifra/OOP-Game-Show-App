/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     constructor(){
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }
     /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
     createPhrases(){
         const phrases = [
            new Phrase('I solemnly swear that I am up to no good'),
            new Phrase('prisoner of azkaban'),
            new Phrase('Do not let the muggles get you down'),
            new Phrase('the boy who lived'),
            new Phrase('When in doubt go to the library'),
            new Phrase('Minerwa McGonagall'),
            new Phrase('Fear of a name increases fear of the thing itself'),
            new Phrase('Dobby is free')
        ];
        return phrases;
     }
     /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
     getRandomPhrase(){
        const randomNumber = Math.floor(Math.random()*this.phrases.length);
        console.log(randomNumber);
        const randomPhrase = this.phrases[randomNumber];
        return randomPhrase;
     }
 }
