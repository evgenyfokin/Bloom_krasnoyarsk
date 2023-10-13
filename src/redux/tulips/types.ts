import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export type TulipItem = {
    id: string,
    imageUrl: string,
    title: string,
    price: number,
    sellType: number,
    sizeType: number[],
    count: number
    "category": 4,
}

export enum Status {
    LOADING = ' loading',
    SUCCESS = ' success',
    ERROR = 'error'
}

export type FetchTulipsArgs = {
    sorts: string[],
    sortProperty: number,
    order: number,
    activeCategory: number
}
export const fetchTulips =
    createAsyncThunk<TulipItem[], FetchTulipsArgs>('tulips/fetchTulips', async (params) => {
        const {sorts, sortProperty, order, activeCategory} = params
        const {data} = await axios.get<TulipItem[]>(
            `https://64e8080eb0fd9648b7907102.mockapi.io/items?sortBy=${sorts[sortProperty]}&order=${order === 0 ? 'desc' : 'asc'}${activeCategory > 0 ? `&category=${activeCategory}` : ''}`)
        return data
    })

export interface ITulipSliceState {
    items: TulipItem[],
    status: Status
}