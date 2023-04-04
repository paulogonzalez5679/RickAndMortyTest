import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import HomePage from '../pages/HomePage';
import CharactersPage from '../pages/CharactersPage';

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect from="/Rick-and-Morty" to="/" />

          <Route exact path="/" name="App" component={HomePage} />
          <Route exact path="/characters" component={CharactersPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
