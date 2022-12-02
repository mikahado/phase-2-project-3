import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';


function App() {
  return (
    // wrap everything in your router
    <Router> 
      <Navigation />      
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/creations" component={Creations} />
          <Route exact path="/creations/new" component={CreationForm} />
          <Route path="/creations/:id" component={ExquisiteHorse} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;