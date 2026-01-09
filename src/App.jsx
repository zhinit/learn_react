import { Board } from "./components/TikTakToePieces.jsx";

import { useState } from 'react';

function MyButton({ count, onClick }) {
  return(
    <button onClick={onClick}>
      Clicked {count} times!
    </button>
  ); 
}

function MyButtons() {
  
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  )
}

const App = () => {
  return (
    <MyButtons />
  )
};
export default App;