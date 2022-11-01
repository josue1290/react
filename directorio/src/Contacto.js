import React from "react";

function contacto(props){
    return(
        <div className="lista">
            <h2>{props.nombre}</h2>
            <p>
                {props.telefono} - {props.correo}
            </p>
            <button>Eliminar</button>
        </div>
    )
}

export default contacto;