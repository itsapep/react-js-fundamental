// import logo from './logo.svg';
import './App.css';
import BodyComponent from './component/body_component';
import BodyComponentFunc from './component/body_component_func';
import Navbar from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './component/content';
import Footer from './component/footer';

function App() {
  return (
    // to wrap object and send ito index.html use <div> or blank tag <>
    <>
      {/* <BodyComponentFunc/>
      <BodyComponent/> */}
      <Navbar/>
      <div style={{minHeight : "100vh"}}>
        <Content/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
