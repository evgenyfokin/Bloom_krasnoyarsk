import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {getCartFromLS} from "../../utils/getCartFromLS";
import {calcTotalPrice} from "../../utils/calcTotalPrice";
import {CartItem, ICartSliceState, IManageItem} from "./types";

const {totalPrice, items} = getCartFromLS()

const initialState: ICartSliceState = {
    totalPrice: totalPrice,
    items: items

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const increment: 1 | 50 = action.payload.sellType.toString() === "опт" ? 50 : 1

            const findItem = state.items.find(obj => obj.id === action.payload.id && obj.sellType === action.payload.sellType && obj.sizeType === action.payload.sizeType)

            if (findItem) {
                findItem.count += increment
            } else {
                state.items.push({
                    ...action.payload,
                    count: increment,
                })
            }


            state.totalPrice = calcTotalPrice(state.items)
        },
        minusItem(state, action: PayloadAction<IManageItem>) {
            const decrement: 50 | 1 = action.payload.sellType === "опт" ? 50 : 1
            const findItem = state.items.find(obj => obj.id === action.payload.id && obj.sellType === action.payload.sellType && obj.sizeType === action.payload.sizeType)

            if (findItem && findItem.count > 0) {
                findItem.count -= decrement
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
        },
        removeItem(state, action: PayloadAction<IManageItem>) {
            console.log(action.payload)
            state.items = state.items.filter(obj => !(obj.id === action.payload.id && obj.sellType === action.payload.sellType && obj.sizeType === action.payload.sizeType))
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const selectCart = (state: RootState) => state.cart

export const {
    addItem,
    minusItem,
    removeItem,
    clearItems
} = cartSlice.actions

export default cartSlice.reducer