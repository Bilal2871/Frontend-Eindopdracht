import './allPokemons.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../pokemonDetail/pokemon';

function Pokemons({}){
    const [allPokemons, setAllPokemons]     = useState({});
    const [loadMore, setLoadMore]           = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
    // const [loading, toggleLoading]  = useState(false);
    // const [error, toggleError]      = useState(false);

    useEffect (() =>{
        void getAllPokemons();
    }, []);

    async function getAllPokemons(){
        try {
            const response = await axios.get(loadMore);
            setAllPokemons(response.data.results);
            console.log(response.data.results);
        } catch (e) {
            console.error('er gaat iets mis');
         }
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