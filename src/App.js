import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./assets/scss/style.scss"
import LandingPages from 'pages/LandingPages';
import DetailsPage from 'pages/DetailsPage';
import Checkout from 'pages/Checkout';
import Example from 'pages/Example'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPages}/>
        <Route exact path="/properties/:id" component={DetailsPage}/>
        <Route exact path="/example" component={Example}/>
        <Route exact path="/checkout" component={Checkout}/>
      </Router>
    </div>
  );
}

export default App;
