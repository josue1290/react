import './App.css';
import React from 'react';

import Busqueda from './Busqueda';
import Lista from './lista';
import Contacto from './Contacto';
import "./lista.css";
import AgregarAmigo from './AgregarAmigo';
import contacto from './Contacto';
import {ContactoProvider} from './Context/ContactoProvider';

function App() {

//   let contactos=[
//     {
//         nombre:"Guillermo",
//         telefono:"123456789",
//         correo:"algo@gmail.com"
//     },
//     {
//         nombre:"Leo",
//         telefono:"322456789",
//         correo:"Chiquitobb@gmail.com"
//     },
//     {
//         nombre:"Chino",
//         telefono:"322987654",
//         correo:"COchinote@gmail.com"
//     },
//     {
//       nombre:"Plata",
//       telefono:"322987654",
//       correo:"Platita@gmail.com"
//     }
// ]

  let contactos;

  if(!localStorage.contactos)
  {
    localStorage.setItem("contactos",JSON.stringify([]));
    const contactos=[];
  }
  else
  {
    contactos=JSON.parse(localStorage.contactos);
  }

  let [contactoslista,setContactoLista]=React.useState(contactos);
  let [ValorBusqueda,setValorBusqueda]=React.useState("");

  let cantidadAmigos=contactoslista.length;
  let contactofiltro;

  function borrarAmigo(telefono)
  {
    const indice=contactos.findIndex(contacto=>contacto.telefono==telefono);
    let contatoTemporal=[...contactos];
    contatoTemporal.splice(indice,1);
    localStorage.setItem("contactos",JSON.stringify(contatoTemporal));
    setContactoLista(contatoTemporal);
  }
  

  if(ValorBusqueda.length>0)
  {
      let textoBusqueda=ValorBusqueda.toLowerCase();
      contactofiltro=contactos.filter((contacto)=>{
            let nombre=contacto.nombre.toLowerCase();
            if(nombre.includes(textoBusqueda))
            return contacto;
        });
  }
  else
  {
    contactofiltro=contactoslista;
  }

  return (

    <React.Fragment>
      <ContactoProvider>
        <div className='contenedorlista'>
        <h1>Mi lista de contacto</h1>
        <h3>Tengo {cantidadAmigos} amigos</h3>
        <Busqueda ValorBusqueda={ValorBusqueda} setValorBusqueda={setValorBusqueda}/>
        <AgregarAmigo/>
        <Lista>
        {
            contactofiltro.map((contacto)=>{
                return (<Contacto
                  nombre={contacto.nombre}
                  telefono={contacto.telefono}
                  correo={contacto.correo}
                  borrarAmigo={()=>borrarAmigo(contacto.telefono)}
                />)
            })
        }
        </Lista>
        </div>
      </ContactoProvider>
  </React.Fragment>
  );
  setContactoLista(contactofiltro);
}

export default App;
