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

function Board( { turn, squares, onPlay } ) {
  function handleClick (i) {
    const nextSquares = squares.slice();
    if (nextSquares[i] || calculateWinner(squares)) { 
      return; 
    }
    nextSquares[i] = turn ? "X" : "O";
    onPlay(nextSquares);
  }

  function calculateWinner (squares) {
    const winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < winners.length; ++i) {
      const [a, b, c] = winners[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  const winner = calculateWinner(squares);
  let status;
  if (winner) { status = "Winner: " + winner; }
  else { status =(turn? 'X' : 'O') + "'s turn!"; }
  
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={ () => handleClick(0) } />
        <Square value={squares[1]} onSquareClick={ () => handleClick(1) } />
        <Square value={squares[2]} onSquareClick={ () => handleClick(2) } />
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

export function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const turn = currentMove % 2
  
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length -1);
  }
  
  function handleResetClick () {
    setHistory([Array(9).fill(null)]);
    setTurn(true);
    setCurrentMove(0)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button onClick={ () => jumpTo(move) }>{description}</button>
      </li>
    )
  });
  
  return (
    <div className="Game">
      <div className="game-board">
        <button onClick={handleResetClick}>RESET GAME</button>
        <Board turn={turn} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}