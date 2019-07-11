import React from 'react';
import { Route } from 'react-router';

// componets
import test from './componets/test'
import Header from './componets/header/Header'
import Sinup from './componets/Sinup'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/submit' component={Sinup} />
      <Route exact path='/test' component={test} />
    </div>
  );
}

export default App;
