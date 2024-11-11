
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light")
  const [alert,setAlert] = useState(null)
    const toggleMode = ()=>{
      if(mode === 'dark'){
        setMode('light');
        document.body.style.backgroundColor = "white";
        showAlert("Light mode enabled","success");
      }
      else{
        setMode('dark');
        document.body.style.backgroundColor = "#0c1f31";
        showAlert("Dark mode enabled","success");
      }
    }
    const showAlert = (message,type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500);
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
    <Router>
      <Navbar title="TextUtils" AboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm heading="Enter text here to analyze" mode={mode} showAlert={showAlert} />} />
        </Routes> {/* exact keyword will help as react reads partially path and then do work */} 
      </div>
    </Router> 

    {/* <Navbar title="TextUtils" AboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm heading="Enter text here to analyze" mode={mode} showAlert={showAlert} />
      </div> */}
  </>
);
}

export default App;