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
            new Phrase('Go ahead make my day'),
            new Phrase('Why so serious'),
            new Phrase('I am your father'),
            new Phrase('Shaken not stirred'),
            new Phrase('It is alive'),
            new Phrase('To infinity and beyond'),
            new Phrase('Chewie, we are home'),
            new Phrase('Here is Johnny')
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
    * Begins game by selecting a random phrase and display it to user
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
        if(allLi.length === allLiShow.length){ //if the length of letter in phrase is same as the lenght of showed letter
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
        const hearts = document.querySelectorAll('[src = "images/liveHeart.png"]'); //chosing only live heart
        this.missed +=1;
        for(let i =0; i<hearts.length;i++){
            hearts[0].setAttribute('src', 'images/lostHeart.png');  //change first live live to lost heart
        }
        if(this.missed === 5){
            this.gameOver(false); //game is lost
        }
    };
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const startScreen = document.querySelector('div #overlay');
        const startScreenHOne = document.querySelector('#overlay h1');
        if (gameWon === true){ //if game is won
            startScreen.setAttribute('class','win');//add class win
            startScreenHOne.textContent = 'WOW! You Win!';//create win information
            startScreen.style.display = '';//display winning screen 
        }else if(gameWon === false){//if game is lose
            startScreen.setAttribute('class','lose');//add class lose
            startScreenHOne.textContent = 'SORRY! Better Luck Next Time!';//create lose information
            startScreen.style.display = '';//display losing screen
        }
    };
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        // console.log(button);
        if(button.disabled === false){
            button.disabled=true; //when the keyboard button is clicked disable it
            const ifLetter = this.activePhrase.checkLetter(button.textContent);//run checkLetter() on the button
            if(!ifLetter){ //if letter wasn't correctly guessed
                button.className = 'wrong';
                this.removeLife(); //remove Life
            }
            if(ifLetter){ //if letter was correctly guessed
                button.className ='chosen'; 
                this.activePhrase.showMatchedLetter(button.textContent); //show corectly guessed letter in the phrase
                const win = this.checkForWin(); //check if the game was won
                if(win){ //if it was won
                    this.gameOver(true); //win the game
                }
            }
        }
    };
 }
