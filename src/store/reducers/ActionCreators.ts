import axios from 'axios';

// import { AppDispatch } from '../store';
import { IUser } from '../types/IUser';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching());
//         const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//         dispatch(userSlice.actions.usersFetchingSuccess(res.data));
//     } catch (err) {
//         dispatch(userSlice.actions.usersFetchingError(err.message));
//     }
// }

export const fetchUsers = createAsyncThunk(
    'users/FETCH',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return res.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)