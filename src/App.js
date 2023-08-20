import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import NavBar from './Components/NavBar';
import Textwork from './Components/TextEnter';
function App() {
  const [mode,setMode]=useState('light')
  const changeMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (<>
     <div className='container-fluid m-0 p-0'>
     <NavBar appName="TextUtils" currentPage="Home" mode={mode} changeMode={changeMode}/>
     <Textwork mode={mode}/>
     {/* <About/> */}
     </div>
     </>
  );
}

export default App;
