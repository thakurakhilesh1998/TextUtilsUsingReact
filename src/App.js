import './App.css';
import NavBar from './Components/NavBar';
import Textwork from './Components/TextEnter';
function App() {
  return (<>
     <div className='container'>
     <NavBar appName="TextUtils" currentPage="Home"/>
     <Textwork/>
     </div>
     </>
  );
}

export default App;
