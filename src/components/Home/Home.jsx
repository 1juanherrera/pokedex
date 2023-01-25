import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeName } from '../../store/slices/username.slice'
import { RiSendPlaneFill } from "react-icons/ri";
import './_Home.scss'

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch( changeName( e.target[0].value ) )

        navigate('/pokedex')
    }

    return (
        <div className='home-card'>
            <div className='home-card__container'>
            <h1>Hello Trainer!</h1>
            <img className='home-card__img' src="/src/assets/ashPokemon.png" />
            </div>
            <h2>Give me you name to start!</h2>
            <form onSubmit={ (e) => handleSubmit(e)}>
                <input type="text" />
                <button><RiSendPlaneFill className='icon'/></button>
            </form>
        </div>
    )
}

export default Home