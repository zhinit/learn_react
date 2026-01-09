function Square() {
  return (
    <button className="square">X</button>
  );
}

function BoardRow () {
  return (
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
  );
}

export function Board() {
  return (
    <div className="board-row">
      <BoardRow />
      <BoardRow />
      <BoardRow />
    </div> 
  )
}