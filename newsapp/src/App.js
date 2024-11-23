import './App.css';
import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'    
const App = ()=> {
  const PageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress,setProgress] = useState(0)
    return (
      <div>
        {/* Learning class-based components */}
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            
          />
          <Routes>
            <Route path="/" element={<News setProgress = {setProgress} apiKey = {apiKey} key="general" pageSize={PageSize} country="us" category="general" />} />
            <Route path="/business" element={<News setProgress = {setProgress} apiKey = {apiKey} key="business" pageSize={PageSize} country="us" category="business" />} />
            <Route path="/entertainment" element={<News setProgress = {setProgress} apiKey = {apiKey} key="entertainment" pageSize={PageSize} country="us" category="entertainment" />} />
            <Route path="/general" element={<News setProgress = {setProgress} apiKey = {apiKey} key="general" pageSize={PageSize} country="us" category="general" />} />
            <Route path="/health" element={<News setProgress = {setProgress} apiKey = {apiKey} key="health" pageSize={PageSize} country="us" category="health" />}/>
            <Route path="/science" element={<News setProgress = {setProgress} apiKey = {apiKey} key="science" pageSize={PageSize} country="us" category="science" />}/>
            <Route path="/sports" element={<News setProgress = {setProgress} apiKey = {apiKey} key="sports" pageSize={PageSize} country="us" category="sports" />} />
            <Route path="/technology"  element={<News setProgress = {setProgress} apiKey = {apiKey} key="technology" pageSize={PageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
}

export default App
