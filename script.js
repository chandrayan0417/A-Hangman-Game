// Selecting elements
const wordDisplay = document.querySelector(".word-display");
const hintText = document.querySelector(".hint-text b");
const guessesText = document.querySelector(".guesses-text b");
const keyboard = document.querySelector(".keyboard");
const hangmanImg = document.querySelector(".hangman img");
let gameExe = document.querySelector(".game-exe");
let playAgainBtn;

// Word list
const wordList = [
    { word: "music", hint: "Makes you feel good, like your favorite song." },
    { word: "air", hint: "What you breathe to stay alive." },
    { word: "hill", hint: "A small mountain." },
    { word: "art", hint: "Colors on paper that can be hung on walls." },
    { word: "star", hint: "A glowing point in the night sky." },
    { word: "ball", hint: "Used in sports like soccer or basketball." },
    { word: "cocoa", hint: "Used to make chocolate." },
    { word: "insect", hint: "Small creature with six legs." },
    { word: "past", hint: "Time that has gone by." },
    { word: "food", hint: "What you eat for nourishment." },
    { word: "jazz", hint: "A type of music." },
    { word: "photo", hint: "A picture taken with a camera." },
    { word: "rock", hint: "A hard substance found in the ground." },
    { word: "trip", hint: "A journey or vacation." },
    { word: "study", hint: "To learn about something." },
    { word: "ride", hint: "To travel in a vehicle." },
    { word: "sun", hint: "The star at the center of our solar system." },
    { word: "drink", hint: "Liquid that you consume." },
    { word: "beat", hint: "The rhythm of music." },
    { word: "moon", hint: "The natural satellite of Earth." },
    { word: "fire", hint: "A hot, burning flame." },
    { word: "long", hint: "Measuring a great distance." },
    { word: "3Dart", hint: "Art that has depth." },
    { word: "play", hint: "To engage in activity for enjoyment." },
    { word: "clay", hint: "A type of soil that is often molded." },
    { word: "make", hint: "To create or produce something." },
    { word: "arch", hint: "A curved structure." },
    { word: "form", hint: "The shape or structure of something." },
    { word: "tool", hint: "An instrument used to do work." },
    { word: "rain", hint: "Water falling from the sky." },
    { word: "star", hint: "A famous person in a particular field." },
    { word: "good", hint: "Of high quality or excellence." },
    { word: "hard", hint: "Difficult to bend or break." },
    { word: "dark", hint: "Lacking light." },
    { word: "know", hint: "To be aware of something." },
    { word: "bird", hint: "A warm-blooded vertebrate with feathers." },
    { word: "home", hint: "A place where one lives." },
    { word: "baby", hint: "A very young child." },
    { word: "fall", hint: "To move downward." },
    { word: "book", hint: "A written or printed work." },
    { word: "work", hint: "Activity involving mental or physical effort." },
    { word: "plan", hint: "A detailed proposal for doing or achieving something." },
    { word: "rest", hint: "To cease work or movement in order to relax." },
    { word: "deep", hint: "Extending far down from the top or surface." },
    { word: "high", hint: "Of great vertical extent." },
    { word: "wide", hint: "Of great or more than average width." },
    { word: "rich", hint: "Having a great deal of money or assets." },
    { word: "poor", hint: "Lacking sufficient money to live at a standard considered comfortable." },
    { word: "loud", hint: "Producing or capable of producing much noise." },
    { word: "soft", hint: "Easy to mold, cut, compress, or fold." },
    { word: "slow", hint: "Moving or operating at a low speed." },
    { word: "fast", hint: "Moving or capable of moving at high speed." },
    { word: "safe", hint: "Protected from or not exposed to danger or risk." },
    { word: "warm", hint: "Having or showing enthusiasm, affection, or kindness." },
    { word: "cool", hint: "Of or at a fairly low temperature." },
    { word: "free", hint: "Not under the control or in the power of another." },
    { word: "true", hint: "In accordance with fact or reality." },
];

// Variables
let selectedWord = "";
let guessedLetters = [];
let incorrectGuesses = 0;
const maxIncorrectGuesses = 6;

// Function to choose a random word from the wordList array
function chooseWord() {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  selectedWord = wordList[randomIndex].word.toLowerCase();
  hintText.textContent = wordList[randomIndex].hint;
}

// Function to display the word with underscores and guessed letters
function displayWord() {
  wordDisplay.innerHTML = "";
  for (const letter of selectedWord) {
    const li = document.createElement("li");
    li.classList.add("letter");
    if (guessedLetters.includes(letter)) {
      li.textContent = letter.toUpperCase();
    } else {
      li.textContent = "";
    }
    wordDisplay.appendChild(li);
  }
}

// Function to create the keyboard buttons
function createKeyboard() {
  keyboard.innerHTML = "";
  for (let i = 65; i <= 90; i++) {
    const btn = document.createElement("button");
    btn.textContent = String.fromCharCode(i);
    btn.addEventListener("click", () => {
      checkLetter(String.fromCharCode(i).toLowerCase());
      btn.disabled = true;
    });
    keyboard.appendChild(btn);
  }
}

// Function to check if the selected letter is in the word
function checkLetter(letter) {
  if (selectedWord.includes(letter)) {
    guessedLetters.push(letter);
    displayWord();
    if (guessedLetters.length === new Set(selectedWord.split("")).size) {
      endGame(true);
    }
  } else {
    incorrectGuesses++;
    updateHangman();
    guessesText.textContent = `${incorrectGuesses} / ${maxIncorrectGuesses}`;
    if (incorrectGuesses === maxIncorrectGuesses) {
      endGame(false);
    }
  }
}

// Function to update the hangman image
function updateHangman() {
  hangmanImg.src = `images/hangman-${incorrectGuesses}.svg`;
}

// Function to end the game
function endGame(win) {
  if (win) {
    gameExe.innerHTML = `
      <div class="con">
        <img src="images/victory.gif" alt="gif" />
        <h4>Congratulations!</h4>
        <p>You won!</p>
        <button class="play-again">Play Again</button>
      </div>`;
  } else {
    gameExe.innerHTML = `
      <div class="con">
        <img src="images/lost.gif" alt="gif" />
        <h4>Game Over!</h4>
        <p>Correct word was: <b>${selectedWord.toUpperCase()}</b></p>
        <button class="play-again">Play Again</button>
      </div>`;
  }
  gameExe.style.display = "flex";
  playAgainBtn = document.querySelector(".play-again");
  playAgainBtn.addEventListener("click", () => {
    gameExe.style.display = "none";
    startGame();
  });
}

// Function to start the game
function startGame() {
  guessedLetters = [];
  incorrectGuesses = 0;
  chooseWord();
  displayWord();
  createKeyboard();
  updateHangman();
  guessesText.textContent = `${incorrectGuesses} / ${maxIncorrectGuesses}`;
}

// Starting the game
startGame();
