import React from 'react';
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import LandingPage from '../LandingPage/LandingPage';
import ColorBook from '../ColorBook/ColorBook';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/color">
          <ColorBook />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
