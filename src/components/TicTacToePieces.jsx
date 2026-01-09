import { useState } from 'react';

function Square({ value, onSquareClick }) {
  
  return (
    <button
    className="square"
    onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function handleClick (i) {
    const nextSquares = squares.slice();
    if (nextSquares[i] === null) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] === "X" ? nextSquares[i] = "O" : nextSquares[i] = "X"
    }
    setSquares(nextSquares);
  }

  function handleResetClick () {
    setSquares(Array(9).fill(null));
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={ () => handleClick(0) } />
        <Square value={squares[1]} onSquareClick={ () => handleClick(1) } />
        <Square value={squares[2]} onSquareClick={ () => handleClick(2) } />
        <button onClick={handleResetClick}>RESET GAME</button>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={ () => handleClick(3) } />
        <Square value={squares[4]} onSquareClick={ () => handleClick(4) } />
        <Square value={squares[5]} onSquareClick={ () => handleClick(5) } />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={ () => handleClick(6) } />
        <Square value={squares[7]} onSquareClick={ () => handleClick(7) } />
        <Square value={squares[8]} onSquareClick={ () => handleClick(8) } />
      </div>
    </>
  );
}