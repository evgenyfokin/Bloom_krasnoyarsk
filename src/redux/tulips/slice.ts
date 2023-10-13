import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {fetchTulips, ITulipSliceState, Status, TulipItem} from "./types";


const initialState: ITulipSliceState = {
    items: [],
    status: Status.LOADING
}

const tulipsSlice = createSlice({
    name: 'tulips',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTulips.pending, (state) => {
                state.status = Status.LOADING
                state.items = []
            })
            .addCase(fetchTulips.fulfilled, (state, action: PayloadAction<TulipItem[]>) => {
                    state.status = Status.SUCCESS
                    state.items = action.payload
                },
            )
            .addCase(fetchTulips.rejected, (state) => {
                state.status = Status.ERROR
                state.items = []
            })


    }
})

export const {setItems} = tulipsSlice.actions
export default tulipsSlice.reducer