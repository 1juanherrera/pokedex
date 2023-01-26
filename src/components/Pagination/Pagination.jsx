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
        setInput(e.target.value)
    }

    return (
        <div className='pagination-container'>
            <button disabled={page == 1 || page < 1} onClick={previousPage}><i class='bx bx-left-arrow-alt'></i></button>
            <input 
            onChange={(e) => onChange(e)}
            onKeyDown={(e) => onkeyDown(e)} 
            name='page' 
            autoComplete='off' value={input}/>
            <p>de {totalPages}</p>
            <button 
            disabled={page == Math.ceil(totalPages) || page > totalPages} 
            onClick={nextPage}><i class='bx bx-right-arrow-alt' ></i></button>
        </div>
    )
}   

export default Pagination