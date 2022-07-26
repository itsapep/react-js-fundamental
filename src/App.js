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
  // create button component
  const buttonText = {
    text : `send`
  }
  // create object styling
  const myStyle = {
    color : `red`,
    fontSize : `100px`
  }

  return (
    // to wrap object and send ito index.html use <div> or blank tag <>
    <>
      {/* calling js variable */}
      {name}
      {/* calling function within html tag */}
      {/* add inline styling */}
      <h1 style={{color : `red`, fontSize : `100px`}}>{sayHello(enigma)}</h1>
      {/* add object styling */}
      <h1 style={myStyle}>{sayHello(enigma)}</h1>
      {/* className using camel case as `class` is `reserved keyword` in JavaScript */}
      {/* styling using css stylesheet refers to className */}
      <button className='my-button'>{buttonText.text}</button>
      {/* htmlFor using camel case as `for` is `reserved keyword` in JavaScript */}
      <label htmlFor='name'>Enter Name</label>
    </>
  );
}

export default App;
