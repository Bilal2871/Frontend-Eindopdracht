import './allPokemons.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../pokemonDetail/pokemon';

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

    
    return (
        <section>
            <article>
                {Object.keys(allPokemons).length > 0 && 
                    <ul>
                        {allPokemons.map((pokemonStats, index) => { 
                            return  (
                                    <li>{pokemonStats.name} </li>  
                                    // <img src={pokemon.sprites.front_default} alt="test" />                                  
                                    )   
                                }
                            )
                        }
                    </ul>
            }
            {Object.keys(allPokemons).length === 0 && <p>Er ging iets mis bij het ophalen van alle Pokèmons...</p>}
            </article>
        </section>
    )    
}

export default Pokemons;