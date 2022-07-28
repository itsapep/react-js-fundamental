// import logo from './logo.svg';
import './App.css';
import BodyComponent from './component/body_component';
import BodyComponentFunc from './component/body_component_func';
import Navbar from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './component/content';
import Footer from './component/footer';
import Parent from './component/parent';
import Counter from './component/counter';
import Clock from './component/clock';

function App() {
  return (
    // to wrap object and send ito index.html use <div> or blank tag <>
    <>
      {/* clock */}
      <Clock/>
      {/* state parent-child */}
      {/* <Parent name="rawr" age={200}/> */}

      {/* state counter */}
      {/* <Counter/> */}

      {/* parent function App passes value to child component BodyComponentFunc */}
      {/* <BodyComponentFunc firstName="Apep"/> */}
      {/* parent function App passes value to child component BodyComponent */}
      {/* <BodyComponent secondName="Yurham"/> */}
      {/* parent function App passes value to child component Parent */}
      {/* <Parent name="Mpus" age={20}/> */}

      {/* <Navbar/>
      <div style={{minHeight : "100vh"}}>
        <Content/>
      </div>
      <Footer/> */}
    </>
  );
}

export default App;
