import { motion } from 'framer-motion'
import { useState } from 'react'
import './_Pagination.scss'


const Pagination = ({page, setPage, totalPages}) => {

    const [ input, setInput ] = useState(1)

    const nextPage = () => {
        setInput(parseInt(input) + 1)
        setPage(parseInt(page) + 1)
    }

    const previousPage = () => {
        setInput(parseInt(input) - 1)
        setPage(parseInt(page) - 1)
    }

    const onkeyDown = (e) => {
        if(e.keyCode == 13){
            setPage(parseInt(e.target.value))

            if(
            parseInt(e.target.value < 1) || 
            parseInt(e.target.value) > Math.ceil(totalPages) || 
            isNaN(parseInt(e.target.value))
            ){
                setPage(1)
                setInput(1)
            }else {
                setPage(parseInt(e.target.value))
            }
        }
    }

    const onChange = (e) => {
        setInput(parseInt(e.target.value))
    }

    return (
        <div className='pagination-container'>
            <motion.button 
            whileHover={{ scale: 1.1 }}
            disabled={page == 1 || page < 1} onClick={previousPage}><i className='bx bx-left-arrow-alt'></i></motion.button>
            <input 
            onChange={(e) => onChange(e)}
            onKeyDown={(e) => onkeyDown(e)} 
            name='page' 
            autoComplete='off' 
            value={input}/>
            <p>de {totalPages}</p>
            <motion.button 
            whileHover={{ scale: 1.1 }}
            disabled={page == Math.ceil(totalPages) || page > totalPages} 
            onClick={nextPage}><i className='bx bx-right-arrow-alt' ></i></motion.button>
        </div>
    )
}   

export default Pagination