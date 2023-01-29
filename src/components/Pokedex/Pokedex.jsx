import axios from "axios"
import { useState, useEffect } from "react"
import PokemonCard from "../PokemonCard/PokemonCard"
import Pagination from '../Pagination/Pagination'
import { useSelector } from "react-redux"
import './_Pokedex.scss'
import { motion } from "framer-motion"


const Pokedex = () => {

    const name = useSelector( state => state.username )

    const [ types, setTypes ] = useState([])
    const [ pokemons, setPokemons ] = useState([])
    const [ page, setPage] = useState(1)
    const [ forPage, setForPage ] = useState(16)

    const totalPages = Math.ceil(pokemons.length / forPage)

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
        .then(res => setPokemons(res.data.pokemon))
        .catch(error => console.error(error))
   }

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        className="pokedex-container">
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
                <motion.ul
                initial={{x: 0, opacity: 0}}
                whileInView={{y: [-50, 0], opacity: 1}}
                transition={{duration: 1}}
                >
                    {
                        pokemons.slice((page -1) * forPage, 
                        (page - 1) * forPage + forPage)
                        .map((item, index) => (
                            <PokemonCard 
                            url={item.pokemon ? item.pokemon.url : item.url}
                            key={index}
                            />
                        ))
                    }
                </motion.ul>
                <Pagination
                page={page} setPage={setPage} totalPages={totalPages} />
        </motion.div>
    )
}

export default Pokedex
