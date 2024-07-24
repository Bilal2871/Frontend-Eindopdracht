import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/overview');
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60vh'
        }}>
            <h1>Oeps, er ging wat fout...</h1>
            <br/>
            <p className="mb-5">De pagina die je zoekt bestaat niet!</p>
            <br/>
            <button onClick={handleButtonClick}>Terug naar overzicht</button>
        </div>
    );
}

export default NotFoundPage;