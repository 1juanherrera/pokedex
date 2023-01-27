import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import './_PokemonCard.scss'
import ValidateColor from "../../data/validateColor"

const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState({type: []});
    const [type, setType] = useState('');
    useEffect(() => {
        axios(url)
        .then(res => {
        setPokemon({
            name: res.data.name,
            id: res.data.id,
            image: res.data?.sprites.other['official-artwork']?.front_default,
            type: res.data.types,
            hp: res.data.stats[0].base_stat,
            attack: res.data.stats[1].base_stat,
            defense: res.data.stats[2].base_stat,
            speed: res.data.stats[5].base_stat,
        })
        setType(res.data.types[0].type.name)
    })
    }, [url]);


    document.body.style = "background: #fff"

  return(
    <Link to={`/pokedex/${pokemon?.id}`}>
     <div
      className="pokemon-card" 
      style={{background: ValidateColor(type)}}>
        <div className="pokemon-card__container">
        
        <h1>{pokemon.name}</h1>
        
        <div>
          <b>Types: </b>
          {
          pokemon.type.map((value) => {
              return (
                  <span key={value.slot}>{value.type.name} <br /></span>
              )
          })}
        </div>
            <div><b>hp:</b> {pokemon.hp}</div>
            <div><b>attack:</b> {pokemon.attack}</div>
            <div><b>defense:</b> {pokemon.defense}</div>
            <div><b>speed:</b> {pokemon.speed}</div>
        </div>
            <img className="pokemon-card__img" src={pokemon.image} alt="" /> 
      </div>
      </Link>
    )
}

export default PokemonCard