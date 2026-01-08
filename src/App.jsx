const App = () => {
  const name = "Zach"
  const x = 10;
  const y = 20;
  const names = ['Brad', 'Mary', 'Joe', 'Sara'];
  const loggedIn = true;

  return (
    <>
      <div className="text-5xl">App</div>
      <h1>hello {name}</h1>
      <p>The sum of {x} and {y} is {x+y}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      { loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1> }
      { loggedIn && <h1>You Are a great member!</h1>}
    </>
  )
};
export default App;
