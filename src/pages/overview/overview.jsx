import React from "react";
import './overview.css';
import Pokemons from "../../components/allPokemons/allPokemons";

function Overview(){
    return (
        <section id="overviewContainer">
            <h1>Overzicht van alle pokemons</h1>
            <Pokemons />
        </section>
    )
}

export default Overview;