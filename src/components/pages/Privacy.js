import React, { Fragment } from "react";
import logoImg from '../../logo.svg'

export default function Privacy () {
    return (
        <Fragment>
            <h3 className="text-center">Politica de privacidad Baby Num</h3>
            <img src={logoImg} className="rounded-circle" style={{with:"100px",height:"100px"}}  
            borderRadius="50%" alt="Logo Img"></img>
                <figure class="text-center">
                <blockquote className="blockquote mt-1">
                <p className="text-start">LMS opera la aplicación Baby Num.</p>
                <p className="text-start">Esta página le informa de nuestras políticas con respecto a la recopilación, uso y divulgación de datos personales cuando utiliza nuestro Servicio.</p>
                        <p className="text-start">- No recopilamos ningún tipo de información personal de los usuarios de nuestra aplicación. No solicitamos, almacenamos ni procesamos datos personales de ninguna forma.</p>
                        <p className="text-start">- Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página.</p>
                        <p className="text-start">- Se le aconseja que revise esta Política de Privacidad periódicamente para cualquier cambio. Los cambios a esta Política de Privacidad son efectivos cuando se publican en esta página.</p>
                        <p className="text-start">Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos a travez del formulario de contacto.</p>                        
                </blockquote>
                </figure>

        </Fragment>
    );
}