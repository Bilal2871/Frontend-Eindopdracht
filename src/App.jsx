import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Overview from './pages/overview/overview';
import Contact from './pages/contact/contact';
import Navigation from './components/navigation/navigation';
import FooterBar from './components/footerBar/footer';
import Pokemons from './components/allPokemons/allPokemons';

function App() {

  return (
    <>
      <Navigation/>
    
      <Routes>
      <Route path = "/"             element = {<Overview/>} />
          <Route path = "/overview"     element = {<Overview/>} />
          <Route path = "/pokemonDetail" element = {<PokemonDetail/>} />
          <Route path = "/contact"      element = {<Contact/>}  />
          <Route path = "/register"      element = {<Register/>}  />
          <Route path = "/login"      element = {<Login/>}  />
          <Route path = "/favorites"    element = {<Favorites/>} />
            <Route path = "/account"      element = {<AccountOverview/>} />
          <Route path = "*" element = {<Overview/>} />
          

        {/* <Route path="*" element={<NotFound />} /> deze nog erin zetten
                <Route path = "/"             element = {<Overview/>} />
        <Route path = "/overview"     element = {<Overview/>} />
        <Route path = "/allPokemons"  element = {<Pokemons/>} />
        <Route path = "/contact"      element = {<Contact/>}  /> */}
      </Routes> 
      
      <FooterBar/>
    </>
  )
}

export default App;