import { IProduct } from "../interfaces/Products/Product";


export enum Types {
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART"
}

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    }
};

type Payload = {
    [Types.ADD_TO_CART]: IProduct;
    [Types.REMOVE_FROM_CART]: IProduct;
};

export type State = {
    counter: number;
    products: IProduct[]
}

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>]

export const ShoppingReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case Types.ADD_TO_CART:
            let existed_item = state.products.find(item => action.payload.id === item.id)
            let addedItem = action.payload
            if (existed_item && existed_item.quantity) {
                existed_item.quantity += 1
                return {
                    ...state,
                    counter: state.counter + 1
                }
            }
            else {
                addedItem.quantity = 1;
                return {
                    ...state,
                    products: [...state.products, addedItem],
                    counter: state.counter + 1
                }

            }

        case Types.REMOVE_FROM_CART:
            if (action && action.payload && action.payload.quantity) {
                return { counter: state.counter - action.payload.quantity, products: [...state.products.filter(product => product.id !== action.payload.id)] }
            }
            return state
        default:
            return state;
    }
};