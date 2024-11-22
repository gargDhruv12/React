import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'    
export default class App extends Component {
  PageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress : 0
  }
  setProgress = (progress)=>{
    this.setState({progress : progress});
  }
  render() {
    return (
      <div>
        {/* Learning class-based components */}
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            
          />
          <Routes>
            <Route path="/" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="general" pageSize={this.PageSize} country="us" category="general" />} />
            <Route path="/business" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="business" pageSize={this.PageSize} country="us" category="business" />} />
            <Route path="/entertainment" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="entertainment" pageSize={this.PageSize} country="us" category="entertainment" />} />
            <Route path="/general" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="general" pageSize={this.PageSize} country="us" category="general" />} />
            <Route path="/health" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="health" pageSize={this.PageSize} country="us" category="health" />}/>
            <Route path="/science" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="science" pageSize={this.PageSize} country="us" category="science" />}/>
            <Route path="/sports" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="sports" pageSize={this.PageSize} country="us" category="sports" />} />
            <Route path="/technology"  element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="technology" pageSize={this.PageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
