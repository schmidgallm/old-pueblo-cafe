// Dependecies
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/Layout/Navbar';
import Landing from './components/Pages/Landing';
import Menu from './components/Pages/Menu';
import Entertainment from './components/Pages/Entertainment';
import Events from './components/Pages/Events';
import Photos from './components/Pages/Photos';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <div className='wrapper'>
          <Switch>
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/entertainment' component={Entertainment} />
            <Route exact path='/events' component={Events} />
            <Route exact path='/photos' component={Photos} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
