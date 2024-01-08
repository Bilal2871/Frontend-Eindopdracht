import React from "react";
import { NavLink } from 'react-router-dom';
import pokeball from '../../assets/pokeball.jpeg';
import pokemon from '../../assets/pokemon.png';
import './navigation.css';


function Navigation(){
    return (
        // <section>
        //     <div id="navBarContainer"> 
        //         <nav>
        //             <ul>
        //                 {/* <li>
        //                 </li> */}
        //                 <li>
        //                     <img src={pokemon} alt="" id="logoPokemon"/>
        //                 </li>
        //                 {/* <li>
        //                 </li>
        //              
        //                 <li>
        //                     <p>favoriet</p>
        //                 </li>
        //                 <li>
        //                     inloggen
        //                 </li> */}
        //             </ul>
        //         </nav>
        //     </div>
        // </section>

        <section class="top-nav">
        <div>
            <img src={pokeball} alt="" srcset="" id="logoPokeball"/>
        </div>
        <div>
          <img src={pokemon} alt="" id="logoPokemon"/>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
        <div class='menu-button'></div>
      </label>
        <ul class="menu">
          <li>Inloggen/registreren</li>
          <li><NavLink to="/overview">Overzicht</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li>Favorieten</li>
        </ul>
      </section>
    )
}

export default Navigation;