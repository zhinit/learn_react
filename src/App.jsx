import { Board } from "./components/TikTakToePieces.jsx";

function MyButton() {
  function handleClick() {
    alert("You clicked me!");
  }

  return(
    <button>
      Click me
    </button>
  ); 
}

const App = () => {
  return (
    <MyButton />
  )
};
export default App;