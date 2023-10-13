import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFilterSliceState} from "./types";

const initialState: IFilterSliceState = {
    sort: {
        searchValue: '',
        activeCategory: 0,
        sortProperty: 0,
        order: 0
    }
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.sort.searchValue = action.payload
        },
        setActiveCategory: (state, action: PayloadAction<number>) => {
            state.sort.activeCategory = action.payload
        },
        setOrder: (state, action: PayloadAction<number>) => {
            state.sort.order = action.payload
        },
        setSortProperty: (state, action: PayloadAction<number>) => {
            state.sort.sortProperty = action.payload
        }
    }
})

export const {
    setSearchValue,
    setActiveCategory,
    setOrder,
    setSortProperty
} = filterSlice.actions
export default filterSlice.reducer