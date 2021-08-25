import { ADD_TO_CART,REMOVE_FROM_CART } from "./constants"


let initialState=[
    {
        id:0,
        name:"Palm Phone",
        img:"https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        price:10000,
        qty:0,
    },
    {
        id:1,
        name:"Kia Car",
        img:"https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        price:10000,
        qty:0,
    },
    {
        id:2,
        name:"Ps4",
        img:"https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        price:10000,
        qty:0,
    }
]

let reducer=(state=initialState,action)=>{
    switch(action.type){

        case ADD_TO_CART:
            let cp=state.map((el)=>el);
            let id=action.payLoad;
            cp[id].qty=cp[id].qty+1;
            return cp;

        case REMOVE_FROM_CART:
            cp=state.map((el)=>el);
            id=action.payLoad;
            if(cp[id].qty>0)
            cp[id].qty=cp[id].qty+1;
            return cp;

        default: return state;
    }
}

export default reducer;