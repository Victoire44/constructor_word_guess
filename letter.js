var Letter = function (letter) {
    this.letter = letter;
    this.guessedLetter = false;
    this.display = function () {
        if (this.guessedLetter) {
            return this.letter;
        } else {
            return "_ ";
        }
    }
    this.check = function (guess) {
        if (guess === this.letter) {
            return this.guessedLetter = true;
        }
    }
}
module.exports = Letter;    