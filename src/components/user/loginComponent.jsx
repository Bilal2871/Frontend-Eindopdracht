import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import './authForm.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const user = await AuthService.login(username, password);
            navigate('/overview');
            window.location.reload();
        } catch (error) {
            setErrorMessage('Inlog gegevens zijn incorrect');
        }
    };

    return (
        <form onSubmit={handleLogin} className="auth-form">
            <h2>Login</h2>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Naam"/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Wachtwoord"/>
            <button type="submit">Log in</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
    );
}

export default Login;