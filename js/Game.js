/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* Below created class name 'Game' with constructor to intilizes properties. */
class Game {

    constructor() {
        this.missed = 0;
        this.phrases = [
            'Slay',
            'Early bird gets the worm',
            'Rule of thumb', 
            'Water is life',
            'Stay fit', ];
        this.activePhrase = 'null';         
    }

    // Used Math.floor() and Math.random() to get a random number.
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    
     // Hid the screen overlay by setting display to = 'none' at the start of game.
    startGame() {
        document.getElementById("overlay").style.display = 'none';
        const randomPhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase = randomPhrase;
        randomPhrase.addPhraseToDisplay();
    }

    // Replaced liveHeart.png to lostHeart.png for when player selects incorrect letter.
    removeLife() {
        const heartsImg = document.querySelectorAll('img');
        heartsImg[this.missed].src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed === 5) {
            this.gameOver("Oh no, you lost. Try again! ", "lose");
        }
    }
     // checks if user selects are all correct letter matches for phrase. returns T/F.
    checkForWin() {
        let win = false;
        let checkLetter = true;

        const letterLi = document.querySelectorAll('.letter');
        letterLi.forEach(letter => {
            if (!letter.classList.contains("show")) {
                checkLetter = false;
            }
        })
        
        if (checkLetter === true) {
            win = true;
        }

        return win
    }
     // Show orginal screen overlay and  displays a message reflecting a win or loss.
     // Addiionally resets gameboard for each new game.
      gameOver(msg, output) {

        const startScreen = document.querySelector("#overlay");
        startScreen.style.display = '';
        startScreen.className = output;
        const h1 = document.querySelector('h1');
        h1.textContent = msg;


        const ul = document.querySelector('ul');
        ul.innerHTML = '';

        const heartsImg = document.querySelectorAll('img');
        heartsImg.forEach(img => {img.src = 'images/liveHeart.png'});
        
        const letterButtons = document.querySelectorAll('.key');
        letterButtons.forEach(letter => {
            letter.className = 'key';
            letter.disable = false;
        });
    }

    
    
    // handleInteraction methods controls most of game logic. 
    handleInteraction(target) {
        const letterSelected = target.textContent;
    
        //disabled clicked letter for user
        if (target.classList.length == 1) {
            target.disable = false;
        }

        if (!target.disable) {
            if (this.activePhrase.checkLetter(letterSelected) === true) {
                target.classList.add('chosen');
                this.activePhrase.showMatchedLetter(letterSelected);
                if (this.checkForWin() === true) {
                    this.gameOver("Congrats, you win!", "win");   //msg for user
                } 
            } else {
                target.classList.add('wrong');
                this.removeLife();

            }
        }
        
        target.disable = true;

        }

}