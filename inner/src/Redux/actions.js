import { ADD_TO_CART,REMOVE_FROM_CART } from "./constants"

export const addCreator=(id)=>{
    return {
        type:ADD_TO_CART,
        payLoad:id,
    }
}

export const removeCreator=(id)=>{
    return {
        type:REMOVE_FROM_CART,
        payLoad:id,
    }
}