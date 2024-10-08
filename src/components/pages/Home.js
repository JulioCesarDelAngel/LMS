import React, { Fragment } from "react";
import logoImg from '../../logo.svg'

export default function Home () {
    return (
        <Fragment>
            <h3 className="text-center">Baby Num</h3>
            <img src={logoImg} className="rounded-circle" style={{with:"100px",height:"100px"}}  
            borderRadius="50%" alt="Logo Img"></img>
                <figure class="text-center">
                <blockquote className="blockquote mt-3">
                <p className="text-start">Baby Num es un juego educativo para niños de 1-5 años.</p>
                <p className="text-start">La aplicación pretende ayudar a niños y niñas a aprender los números, así como relacionar su escritura y pronunciación de una forma entretenida.</p>
                        <p className="text-start">Ademas podra ayudar a desarrollar la habilidad de comunicación.</p>
                        <p className="text-start">¿Tienes una idea ó alguna mejora?</p>
                        <p className="text-start">¡¡Hagámosla!!</p>                        
                </blockquote>
                </figure>

        </Fragment>
    );
}