import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [winner, setWinner ] = useState();
  const [xTurn, setXTurn] = useState(true);
  const [grid, setGrid] = useState([
    { position: "square-top-left", result: null},
    { position: "square-top-center", result: null},
    { position: "square-top-right", result: null}, 
      { position: "square-middle-left", result: null}, 
      { position: "square-middle-center", result: null}, 
      { position: "square-middle-right", result: null}, 
        { position: "square-bottom-left", result: null}, 
        { position: "square-bottom-center", result: null}, 
        { position: "square-bottom-right", result: null}, 
  ]) 

  let arrayOfWinningConditions = [
    //hotizantal
    [ grid[0].result, grid[1].result, grid[2].result ],
    [ grid[3].result, grid[4].result, grid[5].result ],
    [ grid[6].result, grid[7].result, grid[8].result ],
    //cross
    [ grid[0].result, grid[4].result, grid[8].result ],
    [ grid[6].result, grid[4].result, grid[2].result ],
    //vertical
    [ grid[0].result, grid[3].result, grid[6].result ],
    [ grid[1].result, grid[4].result, grid[7].result ],
    [ grid[2].result, grid[5].result, grid[8].result ],
  ];
      //useEffect to test winning condition
      useEffect(() => {
        functionThatCheckIfSomeoneWonTheGame();
      }, arrayOfWinningConditions)

  const moveHandler = (props) => {
    //top-left
    if(props === grid[0].position && xTurn === true ) {
      grid[0].result = "X";
    } else if (props === grid[0].position && xTurn === false) {
      grid[0].result = "O";
    //top-center
    } else if ( props === grid[1].position && xTurn === true ) {
      grid[1].result = "X";
    } else if (props === grid[1].position && xTurn === false) {
      grid[1].result = "O";
    //top-right
    } else if ( props === grid[2].position && xTurn === true ) {
      grid[2].result = "X";
    } else if (props === grid[2].position && xTurn === false) {
      grid[2].result = "O";
        //middle-left
        } else if (props === grid[3].position && xTurn === true ) {
          grid[3].result = "X";
        } else if (props === grid[3].position && xTurn === false) {
          grid[3].result = "O";
        //middle-center
        } else if (props === grid[4].position && xTurn === true ) {
          grid[4].result = "X";
        } else if (props === grid[4].position && xTurn === false) {
          grid[4].result = "O";
        //middle-right
        } else if (props === grid[5].position && xTurn === true ) {
          grid[5].result = "X";
        } else if (props === grid[5].position && xTurn === false) {
          grid[5].result = "O";
          //botton-left
          } else if (props === grid[6].position && xTurn === true ) {
            grid[6].result = "X";
          } else if (props === grid[6].position && xTurn === false) {
            grid[6].result = "O";
          //bottom-center
          } else if (props === grid[7].position && xTurn === true ) {
            grid[7].result = "X";
          } else if (props === grid[7].position && xTurn === false) {
            grid[7].result = "O";
          //bottom-right
          } else if (props === grid[8].position && xTurn === true ) {
            grid[8].result = "X";
          } else if (props === grid[8].position && xTurn === false) {
            grid[8].result = "O";
          }

      setXTurn((xTurn) => (xTurn = !xTurn));
  }

  const functionThatCheckIfSomeoneWonTheGame = () => {
    let xWinner = ['X', 'X', 'X'];
    let oWinner = ['O', 'O', 'O'];

    for (let i = 0; i < arrayOfWinningConditions.length; i++) {
      if (JSON.stringify(arrayOfWinningConditions[i]) === JSON.stringify(xWinner)) {
        setWinner("X WINS");      
      } else if (JSON.stringify(arrayOfWinningConditions[i]) === JSON.stringify(oWinner)) {
        setWinner("O WINS");
      }
    };
  };

  const resetGameHandler = () => {
    setGrid([
      { position: "square-top-left", result: null},
      { position: "square-top-center", result: null},
      { position: "square-top-right", result: null}, 
        { position: "square-middle-left", result: null}, 
        { position: "square-middle-center", result: null}, 
        { position: "square-middle-right", result: null}, 
          { position: "square-bottom-left", result: null}, 
          { position: "square-bottom-center", result: null}, 
          { position: "square-bottom-right", result: null}, 
    ]);
    
    setWinner("");
    setXTurn(true);
  }


  return (
    <div className="app">
      <div className="display">
        <span className={`turn-display ${winner === "X WINS" || winner === "O WINS" ? "display-off" : ""}`} >its Player {xTurn ? "X" : "O"}'s turn</span>
        <div className="win">
          <h2 className="winner-display">{winner}</h2>
          <button className="reset-btn" onClick={resetGameHandler}>Reset</button>
        </div>      
      </div>

      <div className="grid">     
        <div className={`cell ${grid[0].result}`} id="square-top-left" onClick={((e) => moveHandler(e.target.id))} >{grid[0].result}</div>
        <div className={`cell ${grid[1].result}`} id="square-top-center" onClick={((e) => moveHandler(e.target.id))} >{grid[1].result}</div>
        <div className={`cell ${grid[2].result}`} id="square-top-right" onClick={((e) => moveHandler(e.target.id))} >{grid[2].result}</div>
        <div className={`cell ${grid[3].result}`} id="square-middle-left" onClick={((e) => moveHandler(e.target.id))} >{grid[3].result}</div>
        <div className={`cell ${grid[4].result}`} id="square-middle-center" onClick={((e) => moveHandler(e.target.id))} >{grid[4].result}</div>
        <div className={`cell ${grid[5].result}`} id="square-middle-right" onClick={((e) => moveHandler(e.target.id))} >{grid[5].result}</div>
        <div className={`cell ${grid[6].result}`} id="square-bottom-left" onClick={((e) => moveHandler(e.target.id))} >{grid[6].result}</div>
        <div className={`cell ${grid[7].result}`} id="square-bottom-center" onClick={((e) => moveHandler(e.target.id))} >{grid[7].result}</div>
        <div className={`cell ${grid[8].result}`} id="square-bottom-right" onClick={((e) => moveHandler(e.target.id))} >{grid[8].result}</div>
      </div>      
    </div>
  
  );
}

export default App;
