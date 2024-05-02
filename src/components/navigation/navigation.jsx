import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import pokemon from '../../assets/pokemon_logo.png';
import './navigation.css';
import AuthService from '../../services/authService';

function Navigation(){
    const [isLoggedIn, setIsLoggedIn] = useState(AuthService.isLoggedIn());
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const checkLoginStatus = () => {
            setIsLoggedIn(AuthService.isLoggedIn());
        };

        window.addEventListener('storage', checkLoginStatus);

        return () => {
            window.removeEventListener('storage', checkLoginStatus);
        };
    }, []);

    const handleLogout = () => {
        AuthService.logout();
        setIsLoggedIn(false);
        window.location.reload();
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className="top-nav">
            <div className="logo-container">
                <img src={pokemon} width="150" height="auto" alt="pokemonLogo" id="logoPokemon"/>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <i className="fas fa-bars"></i>
            </div>
            {isMenuOpen && (
                <ul className="menu">
                    <li><NavLink to="/overview" onClick={toggleMenu}>Overzicht</NavLink></li>
                    {isLoggedIn && <li><NavLink to="/favorites" onClick={toggleMenu}>Favorieten</NavLink></li>}
                    {isLoggedIn && <li><NavLink to="/account" onClick={toggleMenu}>Account</NavLink></li>}
                </ul>
            )}
            <ul className="menu-real">
                <li><NavLink to="/overview" onClick={toggleMenu}>Overzicht</NavLink></li>
                {isLoggedIn && <li><NavLink to="/favorites" onClick={toggleMenu}>Favorieten</NavLink></li>}
                {isLoggedIn && <li><NavLink to="/account" onClick={toggleMenu}>Account</NavLink></li>}
            </ul>
            <div className="auth-buttons">
                {!isLoggedIn && isMenuOpen ? (
                    <>
                        <NavLink to="/login" className="auth-button">Inloggen</NavLink>
                        <NavLink to="/register" className="auth-button">Registreren</NavLink>
                    </>
                ) : (
                    <button onClick={handleLogout} className="auth-button">Uitloggen</button>
                )}
            </div>
        </section>
    )
}

export default Navigation;