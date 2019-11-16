import React, {useState} from 'react'
import api from '../services/api';
import logo from '../assets/logo.svg';

import './Login.css';

export default function Login({ history }) {
    
    const [username, setUsername] = useState("");
    
    async function handleSubmit(e) {
        e.preventDefault();
        
        const response = await api.post('/devs', {
            username: username,
        });

        console.log(response.data);

        const { _id } = response.data;

        history.push(`dev/${_id}`);
    }

    return (
        <div className="login-container" onSubmit={handleSubmit}>
            <form>
                <img src={logo} alt="Tindev" />
                <input 
                    placeholder="Digite seu usuário no GitHub." 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
