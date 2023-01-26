import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import ValidateColor from "../../data/validateColor"
import './_PokemonDetails.scss'

const PokemonDetails = () => {
    const { id } = useParams()
    const [ data, setData ] = useState({})
    const [type, setType] = useState('');
        
    useEffect(() => {
        axios   
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => {setData({
                name: res.data.name,
                image: res.data?.sprites.other['official-artwork']?.front_default,
                type: res.data.types,
                height: res.data.height,
                weight: res.data.weight,
                id: res.data.id,
                type: res.data.types,
                ability: res.data.abilities,
                movements: res.data.moves,
                hp: res.data.stats[0].base_stat,
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                speed: res.data.stats[5].base_stat
            })
            setType(res.data.types[0].type.name)
        })
    }, [id])

    document.body.style = `background: ${ValidateColor(type)}`

    return (
        <div className="pokemon-detail">
            <Link to='/pokedex'>
                <button><i class='bx bx-left-arrow-alt'></i></button>
            </Link>
            <div className="pokemon-detail__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"/>
            </div>
            <div className="pokemon-detail__data">
                <img src={data.image}/>
                <h1 className="name">{data.name}</h1>
                <div className="data">
                <div>{data.height} <br /><span>Height</span></div>
                <div>{data.weight} <br /><span>Weigth</span></div>
                </div>
                <h1>{data.type1}</h1>
                <h1 className="id">#{data.id}</h1>
            </div>
            <div className="pokemon-detail__container-two">
            <div className="container__type">
                <h1>Type</h1>
                    {
                        data.type?.map((res) => {
                            return (
                                <div style={{background: ValidateColor(res.type.name)}} key={res.slot}>{res.type.name}</div>
                            )
                        })
                    }
                </div>
            <div className="container__ability">
                <h1>Ability</h1>
                    {
                        data.ability?.map((res) => {
                            return (
                                <div key={res.slot}>{res.ability.name}</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="pokemon-detail__column">
                <h1>Stats base</h1>
                <h4>HP</h4>
                <div class="progress">
                    <div class="progress-bar" style={{width: data.hp*2.4}}>
                        <span class="progress-text">{data.hp}/200</span>
                    </div>
                </div>
                <h4>Speed</h4>
                <div class="progress">
                    <div class="progress-bar" style={{width: data.speed*2.4}}>
                        <span class="progress-text">{data.speed}/200</span>
                    </div>
                </div>
                <h4>Attack</h4>
                <div class="progress">
                    <div class="progress-bar" style={{width: data.attack*2.4}}>
                        <span class="progress-text">{data.attack}/200</span>
                    </div>
                </div>
                <h4>Defense</h4>
                <div class="progress">
                    <div class="progress-bar" style={{width: data.defense*2.4}}>
                        <span class="progress-text">{data.defense}/200</span>
                    </div>
                </div>
            </div>
            <div className="pokemon-detail__movements">
                <h1>Movements</h1>
            {
                data.movements?.map((res) => {
                    return (
                        <div key={res.slot}>{res.move.name}</div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default PokemonDetails