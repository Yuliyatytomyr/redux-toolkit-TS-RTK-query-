import { IUser } from '../types/IUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from '../reducers/ActionCreators';

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    // count: number;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: "",
    // count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    // reducers: {
    //     // increment(state, action: PayloadAction<number>) {
    //     //     state.count += action.payload;
    //     // }
    //     usersFetching(state) {
    //         state.isLoading = true;
    //     },
    //     usersFetchingSuccess(state, action) {
    //         state.isLoading = false;
    //         state.users = action.payload;
    //         state.error = "";
    //     },
    //     usersFetchingError(state, action) {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    // },
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.users = action.payload;
            state.error = "";
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default userSlice.reducer