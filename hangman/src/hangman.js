class HangmangClass {
  constructor(word, tryy) {
    this.word = word.toLowerCase().split("");
    this.trys = tryy;
    this.gussedLetters = [];
    this.stateGame = "playing";
  }

  calculate() {
    const fineshed = this.word.every(
      (letter) => this.gussedLetters.includes(letter) || letter === " "
    );

    if (this.trys <= 0) {
      this.stateGame = "Failed";
      // newP.textContent = 'Nice try! the word was "cat"'
    } else if (fineshed && this.trys > 0) {
      this.stateGame = "fineshed";
      // newP.textContent = 'Great work! You guessed the word!!'
    } else {
      this.stateGame = "playing";
    }
  }

  get getStatusMessage() {
    if (this.stateGame === "playing") {
      return `Guesses left: ${this.trys}`;
    } else if (this.stateGame === "Failed") {
      return `Nice try! the word was ${this.word.join("")}`;
    } else if (this.stateGame === "fineshed") {
      return `Great work! You guessed the word!!`;
    }
  }

  get getPuzzle() {
    let puzzle = "";
    this.trys >= 0;
    this.word.forEach((letter) => {
      if (this.gussedLetters.includes(letter) || letter === " ") {
        puzzle += `${letter}`;
      } else {
        puzzle += `*`;
      }
    });

    // this.word.forEach((letter)=>{
    //     return letter === this.gussedLetters
    // })
    return puzzle;
  }

  guess(letterGuess) {
    letterGuess = letterGuess.toLowerCase();
    const isUnique = !this.gussedLetters.includes(letterGuess);
    const badGuessed = !this.word.includes(letterGuess);

    if (this.stateGame === "playing") {
      if (isUnique) {
        this.gussedLetters = [this.gussedLetters, letterGuess];
      }

      if (badGuessed) {
        this.trys--;
      }
      this.calculate();
    }
  }
}

export default HangmangClass;
