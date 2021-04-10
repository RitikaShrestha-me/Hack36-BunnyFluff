import React from "react";
import './App.scss';
import './components/login/style.scss'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
// import { Login , Register } from "./components/login/index"
import Apps from "./components/login/log&reg"
// import logreg from "./components/login/log&reg"
// import Hero from "./components/Hero"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from "./components/Intro";

function App() {

  return (
   <Router>
   <div className="App">
      <Navbar/>
      <div className="contents">
        {/* <Home/>
        <Apps/>
        <Contact/> */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/Apps">
          <Apps />
          </Route>
          <Route exact path="/Contact">
            <Contact/>
          </Route>
          <Route exact path="/Intro">
            <Intro/>
          </Route>
        </Switch> 
      </div>
    </div>
     </Router> 
  );
}

export default App;


