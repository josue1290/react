import React from "react";

function contacto(props){

    function Eliminar(){
        props.borrarAmigo();
    }

    return[
            <div className="lista">
            <h2>{props.nombre}</h2>
            <p>
                {props.telefono} - {props.correo}
            </p>
            <button onClick={Eliminar}>Eliminar</button>
        </div>
    ];
}

export default contacto;