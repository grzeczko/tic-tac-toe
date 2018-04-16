class TicTacToe {
  constructor() {
    let _symbol = "X";
    let _squares = 9;

    this.bindButtons = function() {
      // square listener
      let square = document.getElementsByClassName('square');
      for (let i = 0; i < square.length; i++) {
        square[i].addEventListener('click', ()=>{
          this.markSquare(square[i]);
        });
      }

      // restart button listener
      let restart = document.getElementById("restart-button");
      restart.addEventListener('click', ()=>{
        this.restartGame();
      });
    }

    this.markSquare = function(square) {
      if (square.innerHTML === "") {
        square.innerHTML = _symbol;
        _symbol = (_symbol === "X") ? "O" : "X";

        _squares--;

        if (_squares === 0) {
          document.getElementById("message").style.display = "block";
        }
      }
    }

    // restart GAME
    this.restartGame = function() {
      _squares = 9;
      _symbol = "X";
      let square = document.getElementsByClassName('square');
      for (let i = 0; i < square.length; i++) {
        square[i].innerHTML = "";
      }
      document.getElementById("message").style.display = "none";
    }
  }
}

const tictactoe1 = new TicTacToe();
tictactoe1.bindButtons();
