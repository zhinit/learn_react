function Square({ value }) {
  return (
    <button className="square">{value}</button>
  );
}

function BoardRow () {
  return (
    <div className="board-row">
      <Square value="1" />
      <Square value="2" />
      <Square value="3" />
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
  );
}