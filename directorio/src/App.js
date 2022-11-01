import logo from './logo.svg';
import './App.css';
import React from 'react';
import Busqueda from './Busqueda';
import Lista from './Lista';

function App() {


  let [ValorBusqueda,setValorBusqueda]=React.useState("");

  return (
  <React.Fragment>
    <h1>h1 desde App.js</h1>
    <Busqueda ValorBusqueda={ValorBusqueda} setValorBusqueda={setValorBusqueda}/>
    <Lista ValorBusqueda={ValorBusqueda}/>
  </React.Fragment>
  );
}

export default App;
