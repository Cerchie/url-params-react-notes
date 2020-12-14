import { exitCode } from 'process';
import React, {useState} from 'react';
import Post from './Post';
import {useHistory} from 'react-router-dom';
const Contact = () => {
    const [email, setEmail] = useState("");
    const history = useHistory();
    function handleChange(e){
        setEmail(e.target.value)
    }
    function storeEmail(){
        alert("jk, no emial change")
    }
    function handleSubmit(evt){
        evt.preventDefault();
        storeEmail(email);
        history.push('/')
    }
    return (
        <div>
            <h1>This is the Contact page.</h1>
            <p>To get in touch, enter email.</p>
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Contact;