import { HashRouter, Routes, Route } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import Pokedex from './components/Pokedex/Pokedex'
import Home from './components/Home/Home'
import './App.css'


const App = () => {

  return (
    <HashRouter>
    <div className="App">
      <div className="pokeball-background"></div>
      <Routes>

      <Route path='/' element={<Home />}/>

        <Route element={<ProtectedRoutes />} >
        <Route path='/pokedex' element={<Pokedex />}/>
        <Route path='/pokedex/:name' element={<PokemonDetails />}/>
      </Route>

      <Route/>

      </Routes>
    </div>
    </HashRouter>
  )
}

export default App
