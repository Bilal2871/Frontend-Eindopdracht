import React from "react";
import { NavLink } from 'react-router-dom';
import pokeball from '../../assets/pokeball.jpeg';
import pokemon from '../../assets/pokemon.png';
import './navigation.css';


function Navigation(){
    return (
        <section>
            <div id="navBarContainer"> 
                <nav>
                    <ul>
                        {/* <li>
                            <img src={pokeball} alt="" srcset="" id="logoPokeball"/>
                        </li> */}
                        <li>
                            <img src={pokemon} alt="" id="logoPokemon"/>
                        </li>
                        {/* <li>
                        <NavLink to="/overview">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <p>favoriet</p>
                        </li>
                        <li>
                            inloggen
                        </li> */}
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Navigation;