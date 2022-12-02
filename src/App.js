import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';


function App() {
  return (
    // wrap everything in your router
    <Router> 
      <div className="App">
       <Home />


      </div>
    </Router>
  );
}

export default App;