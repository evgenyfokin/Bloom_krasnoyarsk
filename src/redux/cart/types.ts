export type CartItem = {
    id: string,
    imageUrl: string,
    title: string,
    price: number,
    sellType: string,
    sizeType: number,
    count: number
}

export interface ICartSliceState {
    totalPrice: number,
    items: CartItem[]
}


export interface IManageItem {
    id: string,
    sellType: string,
    sizeType: number
}