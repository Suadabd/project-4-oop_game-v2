/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* var I'm working with */
let game = '';
const startButton = document.querySelector('.start');
const keyboardButtons = document.querySelector('#qwerty')


// used event listener to create a new Game object.
//'.startGame()' method called in reponse to when start butoon is clicked.
startButton.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game = new Game;
        game.startGame();
    }
})



// Button click here calls '.handleInteraction()' method on the game.
keyboardButtons.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
})