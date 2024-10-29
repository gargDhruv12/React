
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './Alert';

function App() {
  const [mode,setMode] = useState("light")
    const toggleMode = ()=>{
      if(mode === 'dark'){
        setMode('light');
        document.body.style.backgroundColor = "white";
      }
      else{
        setMode('dark');
        document.body.style.backgroundColor = "#0c1f31";
      }
    }
  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //      href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <div> Hello, Eager to learn react quickly</div>
    
    <>
      
      <Navbar title = "TextUtils" AboutText = "About us" mode= {mode} toggleMode={toggleMode}/>
      <Alert alert="I am alert"/>
      <div className='container my-3'>
        <TextForm heading="Enter text here to analyze" mode= {mode}></TextForm >
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
