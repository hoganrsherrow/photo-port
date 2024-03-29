import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const ContactForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // Validation
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        if(e.target.name === 'email') {
            if(!validateEmail(e.target.value)) setErrorMessage('Your email is invalid.');
            else setErrorMessage('');
        } else {
            if(!e.target.value.length) setErrorMessage(`${e.target.name} is required.`);
            else setErrorMessage('');
        }
        if(!errorMessage) setFormState({...formState, [e.target.name]: e.target.value });
    }

    // console.log(errorMessage);
    // console.log(formState);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1 data-testid='h1tag'>Contact me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={formState.name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <input type='email' name='email' defaultValue={formState.email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={formState.message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button data-testid='btntag' type='submit'>Submit</button>
            </form>
        </section>
    );
}  

export default ContactForm;