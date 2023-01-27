import { HashRouter, Routes, Route } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import Pokedex from './components/Pokedex/Pokedex'
import Home from './components/Home/Home'
import Footer from './Footer/Footer'
import './App.css'


const App = () => {

  return (
    <HashRouter>
      <div className="pokeball-background"></div>
      <Routes>

      <Route path='/' element={<Home />}/>

        <Route element={<ProtectedRoutes />} >
        <Route path='/pokedex' element={<Pokedex />}/>
        <Route path='/pokedex/:id' element={<PokemonDetails />}/>
      </Route>

      <Route/>

      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
