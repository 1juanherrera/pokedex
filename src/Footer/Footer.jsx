import { motion } from 'framer-motion'
import './_Footer.scss'

const Footer = () => {
    return (
        <motion.div
        whileInView={{x: [-50, 0], opacity: 1}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='footer'>
        <span className='footer__made-by'>Made by <b>Juan Herrera</b></span>
        <div className='footer__table'></div>
        <span className='footer__follow-me'>Follow me</span>
        <a className='footer__github-icon' target='_blank' href='https://github.com/1juanherrera'><i class='bx bxl-github'></i></a>
      </motion.div>
    )
}

export default Footer