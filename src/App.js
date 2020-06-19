// Dependecies
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Wrapper from './components/Layout/Wrapper';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Pages/Landing';
import Menu from './components/Pages/Menu';
import Entertainment from './components/Pages/Entertainment';
import Events from './components/Pages/Events';
import Photos from './components/Pages/Photos';
import Contact from './components/Pages/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Router>
      <Fragment>
        <Wrapper>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/entertainment' component={Entertainment} />
            <Route exact path='/events' component={Events} />
            <Route exact path='/photos' component={Photos} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </Wrapper>
      </Fragment>
    </Router>
  );
}

export default App;
