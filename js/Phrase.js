/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/** 
 * Created 'Phrase' class to represent phrase object. 
 * set phrase parameter to lower case in constructor() method. 
*/
class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /** adds letter placeholders to the display when the game starts.
     * letters are represnted by created li element.
     */
    addPhraseToDisplay() {
        const ul = document.querySelector('ul');
        const phraseSplit = this.phrase.split('');
        phraseSplit.forEach(letter => {
            let li = document.createElement('li');
            if (letter.match(/[a-z]/i)) {                //regex for matching letters
                li.classList = `hide letter ${letter}`;
                li.textContent = letter;
            } else {
                li.className = "space";
                li.textContent = " ";
            }
            ul.appendChild(li);  
        })
     }
  /** Checks whether the chosen letter bv user matches a letter in the phrase */
     checkLetter(chosenletter) {
        let y = false;
        const phraseSplit = this.phrase.split('');
        phraseSplit.forEach(letter => {
            if (letter === chosenletter) {
                y = true;
            }
        })
        return y
    }
/** Reveals the matching letter/s user selects by removing the hide class name and replacing it with 'show" class name.  */
 showMatchedLetter(letterMatches) {
    const letterLi = document.querySelectorAll(`.letter.${letterMatches}`);
    letterLi.forEach(li => {
        li.classList.remove('hide');
        li.classList.add('show');
    })
}
}










