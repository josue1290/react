import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  let midato=12;
  let midato2=13;

  return (
  // React.Fragment sirve para envolver varias etiquetas
  // se puede trabajar como un arreglo al poner [] en lugar de los corchetes
    <React.Fragment>
      <h1>hola mundo</h1>
      <h1>{midato + midato2}</h1>
    </React.Fragment>
  );
}

export default App;
