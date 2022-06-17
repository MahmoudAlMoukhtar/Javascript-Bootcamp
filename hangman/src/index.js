import HangmangClass from "./hangman";
import getPuzzle from "./requests";

const puzzleEl = document.getElementById("puzzle");
const guessesCount = document.getElementById("guessesCount");
let game1;
const render = () => {
  puzzleEl.innerHTML = "";
  guessesCount.textContent = game1.getStatusMessage;
  game1.getPuzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");

    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.guess(guess);
  render();
});

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new HangmangClass(puzzle, 5);
  console.log(game1);
  render();
};
document.querySelector("#btnReset").addEventListener("click", startGame);
startGame();
