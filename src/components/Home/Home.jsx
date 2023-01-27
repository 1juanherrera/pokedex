import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeName } from '../../store/slices/username.slice'
import { RiSendPlaneFill } from "react-icons/ri";
import './_Home.scss'
import { motion } from 'framer-motion';

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch( changeName( e.target[0].value ) )

        navigate('/pokedex')
    }

    return (
        <motion.div
        whileInView={{x: [-50, 0], opacity: 1}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='home-card'>
            <div className='home-card__container'>
            <h1>Hello Trainer!</h1>
            <img className='home-card__img' src="https://i.pinimg.com/originals/28/ec/d6/28ecd67d058708db6a65de3e88f2c9f6.png" />
            </div>
            <h2>Give me you name to start!</h2>
            <form onSubmit={ (e) => handleSubmit(e)}>
                <input type="text" />
                <button><RiSendPlaneFill className='icon'/></button>
            </form>
        </motion.div>
    )
}

export default Home