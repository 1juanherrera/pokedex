import { IoMdExit } from 'react-icons/io';
import './_Exit.scss';
import { changeName } from '../../store/slices/username.slice';
import { useDispatch } from 'react-redux';

const Exit = () => {

    const dispatch = useDispatch();

    const restart = () => {
        dispatch(changeName(''))

    }

    return (
        <div className='exit'>
                <button className='exit__button' onSubmit={ restart() }>
                    <IoMdExit />
                </button>
        </div>
    )
} 

export default Exit