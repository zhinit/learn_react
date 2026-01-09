import { Board } from "./components/TikTakToePieces.jsx";

import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return(
    <button onClick={handleClick}>
      Clicked {count} times!
    </button>
  ); 
}

const App = () => {
  return (
    <MyButton />
  )
};
export default App;