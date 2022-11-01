import React from "react";
import contacto from "./Contacto";
import Contacto from "./Contacto";





function Lista(props){

    let contactos=[
        {
            nombre:"Guillermo",
            telefono:"123456789",
            correo:"algo@gmail.com"
        },
        {
            nombre:"Leo",
            telefono:"322456789",
            correo:"Chiquitobb@gmail.com"
        },
        {
            nombre:"Chino",
            telefono:"322987654",
            correo:"COchinote@gmail.com"
        }
    ]

    let contactofiltro=[];
    if(props.ValorBusqueda.length!=0)
    {
        let textoBusqueda=props.ValorBusqueda.toLowerCase();
        contactofiltro=contactos.filter((contacto)=>{
            let nombre=contacto.nombre.toLowerCase();
            if(nombre.includes(textoBusqueda))
            return contacto;
        });
    }
    else
    {
        contactofiltro=contactos
    }


    return(
        <React.Fragment>
        <h1>Mi lista</h1>
        <div>
            {
                contactofiltro.map((contacto)=>{
                    return (<Contacto
                            nombre={contacto.nombre}
                            telefono={contacto.telefono}
                            correo={contacto.correo}
                        />)
                })
            }
        </div>
        </React.Fragment>
    );

}

export default Lista;