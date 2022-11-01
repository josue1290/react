import React from "react";
import "./Busqueda.css";


function Busqueda(props){

    let [ValorBusqueda,setValorBusqueda]=React.useState("");


    function actutext(event)
    {
        console.log(event.target.value);
        props.setValorBusqueda(event.target.value);
    }
    return(
        <div className="contenedor">
            <input onChange={actutext}></input>
            <button>dale click</button>
            <h2>{props.ValorBusqueda}</h2>
        </div>
    );
}


export default Busqueda;