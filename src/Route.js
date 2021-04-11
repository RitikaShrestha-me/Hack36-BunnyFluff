import Home from './components/Home'
import Contact from './components/Contact'
import Apps from './components/login/log&reg'
import Donate from './components/Donate'
import Intro from './components/Intro'
import Instruction from './components/Instruction'
import Fund from './components/Fund'

import { BrowserRouter as Route, Switch } from 'react-router-dom'

const Routes = () => {
    return ( 
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
            <Route exact path="/Fund">
                <Fund />
              </Route>
          </Switch> 
     );
}
 
export default Routes;