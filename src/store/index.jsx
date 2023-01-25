import { configureStore } from '@reduxjs/toolkit'
import usernameSlice from './slices/username.slice'

export default configureStore({
    reducer: {
        username : usernameSlice
    }
})