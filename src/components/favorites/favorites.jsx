import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/authService';
import React, { useState, useEffect } from 'react';
import PokemonDetail from "../pokemonDetail/pokemonDetail.jsx";
import { toggleFavorite } from './favoriteFunction.jsx';
import authService from "../../services/authService";

export default function Favorites() {
    const navigate = useNavigate();
    const isLoggedIn = AuthService.isLoggedIn();
    const [favorites, setFavorites] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [displayedPokemons, setDisplayedPokemons] = useState([]);

    const handleToggleFavorite = (name) => {
        const updatedFavorites = toggleFavorite(name, favorites);
        setFavorites(updatedFavorites);
    };

    const handlePokemonClick = (pokemon) => {
        setSelectedPokemon(pokemon);
    }

    // If user is not logged in, redirect to login page
    if (!isLoggedIn) {
        navigate('/login');
        return null;
    }

    useEffect(() => {
        const favoriteNames = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(favoriteNames);
        const fetchFavorites = async () => {
            const favoriteData = await Promise.all(
                favoriteNames.map(name =>
                    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                        .then(response => response.json())
                )
            );
            setDisplayedPokemons(favoriteData);
        };
        fetchFavorites();
    }, []);

    return (
        <>
            <div className="pokemon-grid">
                {displayedPokemons.length > 0 ? (
                    displayedPokemons.map(pokemon => (
                        <div className="poke-holder" key={pokemon.id}>
                            <div className="pokemon-card"
                                 onClick={() => handlePokemonClick(pokemon)}>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                                <p>{pokemon.name}</p>
                            </div>
                            {authService.isLoggedIn() === false ? "" : <i onClick={() => handleToggleFavorite(pokemon.name)}
                                                                          className={`far fa-heart ${favorites.includes(pokemon.name) ? 'fas fa-heart' : ''}`}></i>}
                        </div>
                    ))
                ) : (
                    ""
                )}
                {selectedPokemon && <PokemonDetail pokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />}
            </div>
            {displayedPokemons.length > 0 ? "" : <p>Geen pokemons gevonden...</p>}
        </>
    );
}