import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import './authForm.css';

function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [role, setRole] = useState(["user"]);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();

        if (password !== repeatedPassword) {
            setErrorMessage('Wachtwoorden komen niet overeen');
            return;
        }

        if (username.length < 6 || password.length < 6) {
            setErrorMessage('Naam en wachtwoord moeten minimaal 6 karakters bevatten');
            return;
        }

        try {
            const user = await AuthService.register(username, email, password, role);
            navigate('/login');
        } catch (error) {
            setErrorMessage('Er is iets fout gegaan');
        }
    };


    return (
        <form onSubmit={handleRegister} className="auth-form">
            <h2>Registratie</h2>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)}
                   placeholder="Naam"/>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                   placeholder="Wachtwoord"/>
            <input type="password" value={repeatedPassword} onChange={e => setRepeatedPassword(e.target.value)}
                   placeholder="Herhaal wachtwoord"/>
            <button type="submit">Registreer</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
    );
}
export default Register;