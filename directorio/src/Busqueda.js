import React from "react";
import "./lista.css";


function Busqueda(props){

    function actutext(event)
    {
        console.log(event.target.value);
        props.setValorBusqueda(event.target.value);
    }
    return(
        <div className="inp">
            <input onChange={actutext}></input>
        </div>
    );
}


export default Busqueda;