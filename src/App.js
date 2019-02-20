import React, { Component } from 'react';
import './App.css';

import Cadastro from './cadastro';
import Lista from './lista';

import { Provider } from 'react-redux';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className = "App">
          <Cadastro titulo = 'Cadatro de Clientes'/>
          <Lista />
        </div>
      </ Provider>
    );
  }
}

export default App;
