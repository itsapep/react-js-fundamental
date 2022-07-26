// import logo from './logo.svg';
import './App.css';
import BodyComponent from './component/body_component';
import BodyComponentFunc from './component/body_component_func';

function App() {
  return (
    // to wrap object and send ito index.html use <div> or blank tag <>
    <>
      <BodyComponentFunc/>
      <BodyComponent/>
    </>
  );
}

export default App;
