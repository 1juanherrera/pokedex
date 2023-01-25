import { createSlice } from '@reduxjs/toolkit';


export const usernameSlice = createSlice({
	name: 'username',
    initialState: "",
    reducers: {
        changeName : (state, action) => {
            return action.payload
        }
    }
})

export const { changeName } = usernameSlice.actions;

export default usernameSlice.reducer;