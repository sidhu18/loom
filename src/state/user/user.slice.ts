import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserStateType = {
    id: string,
    name: string,
    orgId?: string,
}

const initialState: UserStateType = {
    id: '',
    name: '',
    orgId: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserInfo: state => state,
        setUserInfo: (state, action: PayloadAction<UserStateType>) => {
            state = action.payload;
        },
    },
});

export const {
    getUserInfo,
    setUserInfo,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
