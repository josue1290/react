import React from "react";

const ContactoContext=React.createContext();

function ContactoProvider(props){

    return(
        <ContactoContext.Provider value={{}}>
            {props.children}
        </ContactoContext.Provider>
    )
}

export {ContactoContext, ContactoProvider};