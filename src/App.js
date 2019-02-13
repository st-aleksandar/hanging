import React, { Component } from 'react';
import './App.css';

import GameStart from './components/GameStart';
import WordGuess from './components/WordGuess';
import GuessLetter from './components/GuessLetter';
import ErrorsCounter from './components/ErrorsCounter';
import GameOver from './components/GameOver';
import GameWin from './components/GameWin';

class App extends Component {

  state = {
      gameRunning : false,
      guessingWord: [],
      guessedLetters: [],
      errNum: 0,
      shownLetters: 0,
      gameOver: false,
      maxErrors: 4,
      gameWin: false
  };

  constructor(props) {
      super(props);
      this.inputRef = React.createRef();
      this.startInputRef = React.createRef();
  }


  gameStart = () => {

    if (this.startInputRef.current.value !== '') {
        this.setState({
            gameRunning: true
        });
    }
  };


  findHowManyLetters = (letter) => {
      let counter = 0;

      for (let i=0; i < this.state.guessingWord.length; i++) {

          if (this.state.guessingWord[i] === letter) {
              counter += 1;
          }
      }

      return counter;
  };


  guessClickHandler = () => {

      const letter = this.inputRef.current.value.toLowerCase();
      let errNum = this.state.errNum;
      let gameOver = this.state.gameOver;
      let shownLetters = this.state.shownLetters;
      let gameWin = this.state.gameWin;


      this.inputRef.current.value = '';

      // check if it is wrong letter
      if (this.state.guessingWord.indexOf(letter) === -1)  {
          errNum += 1;

          if (this.state.errNum >= this.state.maxErrors) {
              gameOver = true;
          }
      } else {

          shownLetters += this.findHowManyLetters(letter);
      }

      if (this.state.gameRunning && (this.state.guessingWord.length <=  shownLetters )) {
          gameWin = true;
      }


      this.setState(prevState => ({
          guessedLetters: [...prevState.guessedLetters, letter],
          shownLetters,
          errNum,
          gameOver,
          gameWin,
      }));

  };


  guessingWordChangeHandle = (e) => {
      this.setState({guessingWord: e.target.value.split('')});
  };


  gameOverHandler = () => {
      this.setState({
          gameOver: false,
          gameRunning : false,
          guessingWord: [],
          guessedLetters: [],
          errNum: 0,
          shownLetters: 0,
          gameWin: false
      });
  };

  render() {

    const gameStart = !this.state.gameRunning ? <GameStart startInputRef={this.startInputRef} startGameHandle={this.gameStart} wordHandle={this.guessingWordChangeHandle}/> : false;

    const guessLetter = ( this.state.gameRunning && !this.state.gameOver && !this.state.gameWin ) ? <GuessLetter over={this.state.gameOver} inputRef={this.inputRef} clicked={this.guessClickHandler}/> : null;

    const gOver = this.state.gameOver ? <GameOver clicked={this.gameOverHandler}/> : null;

    const gWin = this.state.gameWin ? <GameWin clicked={this.gameOverHandler}/> : null;

    const over = ( this.state.gameOver === true ) || (this.state.gameRunning === false);

    return (
      <div className="App">
          <h1>The Hanging Game</h1>
          {gameStart}
          {guessLetter}
          <WordGuess over={over} letters={this.state.guessedLetters} word={this.state.guessingWord} />
          {gOver}
          {gWin}
          <ErrorsCounter errNum={this.state.errNum}/>
      </div>
    );
  }
}

export default App;
