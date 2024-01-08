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
        <Route path = "/allPokemons"  element = {<Pokemons/>} />
        <Route path = "/contact"      element = {<Contact/>}  />
        {/* <Route path="*" element={<NotFound />} /> deze nog erin zetten */}
      </Routes> 
      
      <FooterBar/>
    </>
  )
}

export default App;