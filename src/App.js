import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
// import Textwork from './Components/TextEnter';
function App() {
  return (<>
     <div className='container'>
     <NavBar appName="TextUtils" currentPage="Home"/>
     {/* <Textwork/> */}
     <About/>
     </div>
     </>
  );
}

export default App;
