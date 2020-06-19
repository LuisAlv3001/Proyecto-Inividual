import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import About from './About';
import Resume from './Resume';
import Works from './Works';
import Contact from './Contact';

class App extends React.Component {

  render = () => {
    return (
      <Router>
        <div className="row">
          <div className="col-1 bg-white rounded mt-3">
            <ul className="list-group">
              <NavLink className="list-group-item text-center select" activeClassName="active" to="/about"><i className="fas fa-user"></i><p>ABOUT</p></NavLink>
              <NavLink className="list-group-item text-center select" activeClassName="active" to="/resume"><i className="fas fa-file-alt"></i><p>RESUME</p></NavLink>
              <NavLink className="list-group-item text-center select" activeClassName="active" to="/works"><i className="fas fa-pencil-ruler"></i><p>WORKS</p></NavLink>
              <NavLink className="list-group-item text-center select" activeClassName="active" to="/contact"><i className="fas fa-at"></i><p>CONTACT</p></NavLink>
            </ul>
          </div>
          <Switch>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/resume">
              <Resume></Resume>
            </Route>
            <Route exact path="/works">
              <Works></Works>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
 
export default App;
