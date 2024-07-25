import './App.css';
import { Routes, Route } from 'react-router-dom';
import Overview from './pages/overview/overview';
import Navigation from './components/navigation/navigation';
import FooterBar from './components/footerBar/footer';
import PokemonDetail from './components/pokemonDetail/pokemonDetail';
import Login from './components/user/loginComponent';
import Register from './components/user/registerComponent';
import Favorites from './pages/favorites/favorites';
import AccountOverview from "./pages/user/accountOverview.jsx";
import NotFound from './pages/404.jsx';

function App() {

  return (
    <>
      <Navigation/>
        <Routes>
            <Route path = "/"             element = {<Overview/>} />
            <Route path = "/overview"     element = {<Overview/>} />
            <Route path = "/pokemonDetail" element = {<PokemonDetail/>} />
            <Route path = "/register"      element = {<Register/>}  />
            <Route path = "/login"        element = {<Login/>}  />
            <Route path = "/favorites"    element = {<Favorites/>} />
            <Route path = "/account"      element = {<AccountOverview/>} />
            <Route path = "*"             element = {<NotFound/>} />
        </Routes>
      <FooterBar/>
    </>
  )
}

export default App;