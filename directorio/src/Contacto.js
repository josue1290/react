import React from "react";

function contacto(props){
    return(
        <div>
            <h2>{props.nombre}</h2>
            <p>
                {props.telefono} - {props.correo}
            </p>
        </div>
    )
}

export default contacto;