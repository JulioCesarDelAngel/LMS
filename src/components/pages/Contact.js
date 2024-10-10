import React, { useState , useEffect} from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact(){
    const formId = process.env.REACT_APP_FORMSPREE_ID;    
    const [state, handleSubmit] = useForm({formId});
    const [userFormData, setUserFormData] = useState({ email: '', message: '' });
    
    // useEffect(() => {
    //     console.log('DeBuggsBunny:', userFormData);
    //   }, [userFormData]);


    if (state.succeeded) {
        return <p>Gracias por contactarnos!</p>;
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
        // console.log(name,value);
      };


    return (

        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div class="col-md-8 col-lg-6">
        <div className="container text-center align-middle" >
            <h3 className="text-center">Contactanos</h3>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label for="email" class="form-label mt-4">Dirección de correo electrónico</label>
                        <input type="email" class="form-control" id="email" name="email"aria-describedby="emailHelp" 
                        placeholder="Introducir correo electrónico"
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={userFormData.email}
                        required
                        />
                        <small id="emailHelp" class="form-text text-muted">Nunca compartiremos su correo electrónico con nadie más.</small>
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div>
                        <label for="exampleTextarea" class="form-label mt-4">Capture su  mensaje</label>
                        <textarea class="form-control" id="message" name="message" rows="4"
                            onChange={handleInputChange}
                            value={userFormData.message}
                            required                        
                        ></textarea>
                        
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <div class="mt-3">
                        <button type="submit" class="btn btn-light m-t-5" disabled={ !(userFormData.email && userFormData.message) || (state.submitting) /**/  } >
                            ENVIAR MENSAJE                            
                        </button>
                    </div>
                </fieldset>
            </form>            
         </div>

         </div>
         </div>
    );
}