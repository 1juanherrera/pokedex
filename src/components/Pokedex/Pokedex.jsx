import axios from "axios"
import { useState, useEffect } from "react"
import PokemonCard from "../PokemonCard/PokemonCard"
import { useSelector } from "react-redux"
import './_Pokedex.scss'

const Pokedex = () => {

    const name = useSelector( state => state.username )

    const [ types, setTypes ] = useState([])
    const [ pokemons, setPokemons ] = useState([])
 
    
    useEffect(()=> {
        axios
            .get('https://pokeapi.co/api/v2/type')
            .then(res => setTypes(res.data.results))
            .catch(error => console.error(error))

        axios
            .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279")
            .then(res => setPokemons(res?.data?.results))
            .catch(error => console.error(error))
    }, [])

   const selectedType = (e) => {
    const url = e.target.value

    axios
        .get(url)
        .then(res => {
            setPokemons(res.data.pokemon)
            setPage(1)
        })
        .catch(error => console.error(error))
   }

   const [ page, setPage ] = useState(1)
   const PokemonsPerPage = 16
   const lastIndex = page * PokemonsPerPage
   const firstIndex = lastIndex - PokemonsPerPage

   const pokemonsPaginated = pokemons?.slice( firstIndex, lastIndex )

   const totalPages = Math.ceil(pokemons.length / PokemonsPerPage )

   const pagesNumbers = []

   for(let i = 1; i <= totalPages; i++){
        pagesNumbers.push(i)
   }

    return (
        <div className="pokedex-container">
            <div className="pokedex-container__titles">
            <h1>Pokedex</h1>
            <h3>Welcome {name}, here you can find your favorite pokemon!</h3>
            </div>
            <select onChange={selectedType}>
                {
                    types?.map(type => (
                        <option key={type.name} value={type.url}>{type.name}</option>
                    ))
                }
            </select>
                <ul>
                    {
                        pokemonsPaginated.map((item, index) => (
                            <PokemonCard 
                            url={item.pokemon ? item.pokemon.url : item.url}
                            key={index}
                            />
                        ))
                    }
                </ul>
                <div>
                {
                pagesNumbers.map(num=> (
                    <button 
                    key={num}
                    onClick={() => setPage(num)}
                    >
                        {num}
                    </button>
                ))
                }
            <button 
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}><i class='bx bx-right-arrow-alt'></i></button>
                </div>
        </div>
    )
}

export default Pokedex
