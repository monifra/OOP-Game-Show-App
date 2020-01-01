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
            new Phrase('After all tomorrow is another day'),
            new Phrase('Houston we have a problem'),
            new Phrase('May the Force be with you'),
            new Phrase('There is no place like home'),
            new Phrase('When in doubt go to the library'),
            new Phrase('To infinity and beyond'),
            new Phrase('I feel the need the need for speed')
        ];
        return phrases;
     }
     /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
     getRandomPhrase(){
        const randomNumber = Math.floor(Math.random()*this.phrases.length);
        const randomPhrase = this.phrases[randomNumber];
        return randomPhrase;
     }
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
     startGame(){
        const startScreen = document.querySelector('div #overlay');
        startScreen.style.display = 'none'; //hides start screen
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
     }
     /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin(){
        const allLi = document.querySelectorAll('.letter');
        const allLiShow = document.querySelectorAll('.show');
        // console.log(allLi);
        // console.log(allLiShow);
        if(allLi.length === allLiShow.length){
            return true;
        } else{
            return false;
        }
    };
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const heart = document.querySelectorAll('.tries img');
        this.missed +=1;
        
        if(this.missed === 1){
            heart[0].setAttribute('src', 'images/lostHeart.png');
        }else if(this.missed === 2){
            heart[1].setAttribute('src', 'images/lostHeart.png');
        }else if(this.missed === 3){
            heart[2].setAttribute('src', 'images/lostHeart.png');
        }else if(this.missed === 4){
            heart[3].setAttribute('src', 'images/lostHeart.png');
        }else if(this.missed === 5){
            this.gameOver(false);
        }
    };
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const startScreen = document.querySelector('div #overlay');
        const startScreenHOne = document.querySelector('#overlay h1');
        if (gameWon === true){
            startScreen.setAttribute('class','win');
            startScreenHOne.textContent = 'Great Job! You Win!';
            startScreen.style.display = '';
        }else if(gameWon === false){
            startScreen.setAttribute('class','lose');
            startScreenHOne.textContent = 'Sorry! Better Luck Next Time!';
            startScreen.style.display = '';
        }
    };
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        // console.log(button);
        button.disabled=true;
        const ifLetter = this.activePhrase.checkLetter(button.textContent);
        if(!ifLetter){
            button.className = 'wrong';
            this.removeLife();
        }
        if(ifLetter){
            button.className ='chosen';
            this.activePhrase.showMatchedLetter(button.textContent);
            const win = this.checkForWin();
            if(win){
                this.gameOver(true);
            }
        }

    };
 }
