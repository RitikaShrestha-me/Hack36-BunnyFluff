import React from "react";
import './App.scss';
import './components/login/style.scss'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Apps from "./components/login/log&reg"
import Donate from "./components/Donate"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from "./components/Intro"
import Instruction from "./components/Instruction"
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="contents">
          {/* <Home/>
        <Apps/>
        <Contact/> */}
<<<<<<< HEAD
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/Apps">
          <Apps />
          </Route>
          <Route exact path="/Intro">
            <Intro/>
          </Route>
          <Route exact path="/Instruction">
            <Instruction/>
          </Route>
          <Route exact path="/Contact">
            <Contact/>
          </Route>
        </Switch> 
=======
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Apps">
              <Apps />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/Donate">
              <Donate />
              <Route exact path="/Intro">
                <Intro />
              </Route>
              <Route exact path="/Instruction">
                <Instruction />
              </Route>
            </Route>
          </Switch> 
        </div>
>>>>>>> 51e4b7395bac0d1ac7c6f8f8d1706e870df999aa
      </div>
    </Router>
  );
}

export default App;


