import './allPokemons.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import loadingImage from '../../assets/pokeball.png';
import PokemonDetail from '../pokemonDetail/pokemonDetail';
import Pagination from './pagination';
import {toggleFavorite} from "../favorites/favoriteFunction.jsx";
import authService from "../../services/AuthService.js";

function Pokemons(){
    const [allPokemons, setAllPokemons] = useState([]);
    const [displayedPokemons, setDisplayedPokemons] = useState([]);
    const [searchedPokemons, setSearchedPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // pokemon amount
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [favorites, setFavorites] = useState([]);

    useEffect (() =>{
        void getAllPokemons();
    }, []);

     // Use this to get all the pages
     useEffect(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        setDisplayedPokemons(searchedPokemons.slice(start, end));
    }, [currentPage, searchedPokemons]);

    // Search function
    useEffect(() => {
        setSearchedPokemons(allPokemons.filter(pokemon => pokemon.name.includes(searchTerm)));
    }, [searchTerm, allPokemons]);

    // Used for the favorites
    useEffect(() => {
        const favoriteNames = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(favoriteNames);
    }, []);

    // API date
    async function getPokemonData(url) {
        const response = await axios.get(url);
        return response.data;
    }

    // When pressed toggle favorite this handles that
    const handleToggleFavorite = (name) => {
        const updatedFavorites = toggleFavorite(name, favorites);
        setFavorites(updatedFavorites);
    };

    // This is used to get the pokemons for the overview
    async function getAllPokemons(){
        setIsLoading(true);
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
            const pokemonData = await Promise.all(response.data.results.map(pokemon => getPokemonData(pokemon.url)));
            setAllPokemons(pokemonData);
        } catch (e) {
            console.error('er gaat iets mis');
        }
        setIsLoading(false);
    }
    
        // For the detail page
        const handlePokemonClick = (pokemon) => {
            setSelectedPokemon(pokemon);
        }
    
        // Amount of pages
        const totalPages = Math.ceil(searchedPokemons.length / itemsPerPage);
    
        const beginPage = () => {
            setCurrentPage(1);
        }
    
        const endPage = () => {
            setCurrentPage(totalPages);
        }
    
        const nextPage = () => {
            setCurrentPage(prevPage => {
                // Check if it has reached the end of the searchedPokemons array
                if ((prevPage + 1) * itemsPerPage < searchedPokemons.length) {
                    return prevPage + 1;
                }
                // Reached the end? Then stay on the current page
                return prevPage;
            });
        }
    
        const prevPage = () => {
            setCurrentPage(prevPage => prevPage > 1 ? prevPage - 1 : prevPage);
        }
        
    return (
        <section>
            <article>
                <h3 className="h3-page-number">Pagina {currentPage}</h3>
                <input className="search-bar" type="text" placeholder="Zoeken..." onChange={e => setSearchTerm(e.target.value)} />
                {isLoading ? (
                    <div className="pokemon-load">
                        <img src={loadingImage} width="50" height="auto" alt="Loading..."/>
                        <p>Loading...</p>
                    </div>) : (
                    <>
                        {displayedPokemons.length > 0 &&
                            <div className="pokemon-grid">
                                {displayedPokemons.map((pokemon) => {
                                    return (
                                        <div className="poke-holder" key={pokemon.id}>
                                            <div className="pokemon-card"
                                                onClick={() => handlePokemonClick(pokemon)}>
                                                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                                                <p>{pokemon.name}</p>
                                            </div>
                                            {authService.isLoggedIn() === false ? "" : <i onClick={() => handleToggleFavorite(pokemon.name)}
                                                className={`far fa-heart ${favorites.includes(pokemon.name) ? 'fas fa-heart' : ''}`}></i>}
                                        </div>
                                    )
                                })}
                            </div>
                        }
                        {displayedPokemons.length === 0 && <p>Er ging iets mis bij het ophalen van alle Pokèmons...</p>}
                    </>
                )}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    beginPage={beginPage}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    endPage={endPage}
                />
            </article>
            {selectedPokemon && <PokemonDetail pokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />}
        </section>
    )
}

export default Pokemons;