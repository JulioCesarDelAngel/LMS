import React from "react";
import { useForm, ValidationError } from '@formspree/react';


export default function Contact(){

    const [state, handleSubmit] = useForm("mjkvbvjj");
    if (state.succeeded) {
        return <p>Gracias por contactarnos!</p>;
    }

    return (
        <div className="container text-center align-middle">
        <h3 className="text-center">Contactanos</h3>

        <form onSubmit={handleSubmit}>
            <fieldset>
            <div>
            <label for="email" class="form-label mt-4">Dirección de correo electrónico</label>
            <input type="email" class="form-control" id="email" name="email"aria-describedby="emailHelp" placeholder="Introducir correo electrónico"/>
            <small id="emailHelp" class="form-text text-muted">Nunca compartiremos su correo electrónico con nadie más.</small>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            </div>

            {/* <label htmlFor="email2">
                Email Address
            </label>
            <input
                id="email2"
                type="email" 
                name="email2"
            />
            <ValidationError 
                prefix="Email" 
                field="email2"
                errors={state.errors}
            /> */}

            <div>

            <label for="exampleTextarea" class="form-label mt-4">Capture su  mensaje</label>
            <textarea class="form-control" id="message" name="message" rows="3"></textarea>
            
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            </div>
            {/* <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            /> */}
            <div class="mt-5">
                <button type="submit" class="btn btn-light m-t-5" disabled={state.submitting}>
                    ENVIAR MENSAJE
                </button>
            </div>
            </fieldset>
            </form>            
    </div>

    );
}