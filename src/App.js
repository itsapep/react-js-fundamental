import logo from './logo.svg';
import './App.css';

function App() {
  // create variable
  const enigma = `Enigmacamp`;
  // assign variable with html tag
  const name = <h1>Hello {enigma}</h1>
  // create a function
  function sayHello(name) {
    return `hello ${name}`
  }

  return (
    // to wrap object and send ito index.html use <div> or blank tag <>
    <>
      {/* calling js variable */}
      {name}
      {/* calling function within html tag */}
      <h1>{sayHello(enigma)}</h1>
    </>
  );
}

export default App;
