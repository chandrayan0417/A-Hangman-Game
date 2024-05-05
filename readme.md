# Hangman Game

A simple Hangman game built with HTML, CSS, and JavaScript.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Demo](#demo)
- [How to Play](#how-to-play)
- [Customization](#customization)

## Description

Hangman is a classic word guessing game where the player must guess a word by suggesting letters within a certain number of guesses. This game is built using HTML, CSS, and JavaScript.

## Features

- Random selection of words from a predefined word list.
- Keyboard interface for letter selection.
- Visual representation of incorrect guesses with a hangman image.
- Game over screen with win or lose messages.
- Play again functionality.

## Demo

You can play the game [here](https://chandrayan0417.github.io/A-Hangman-Game/).

![Hangman Demo](DEMO-SS.png)

## How to Play

1. Open the game in your web browser.
2. Click on a letter on the keyboard to guess.
3. Continue guessing letters until you either:
   - Guess the word correctly and win the game.
   - Make too many incorrect guesses and lose the game.

## Customization

You can customize the game by adding more words to the `wordList` array in the `wordList.js` file. Each word should have a corresponding hint.

```javascript
const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    // Add more words here
];
