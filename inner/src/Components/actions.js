// actions are just objects 

// when wirting actions in redux we create something called action creater function 

export const incrementCreator=(val)=>{
    return{
        type:"INCREMENT",
        payload:val,
    };
};

export const decrementCreator=()=>{
    return{
        type:"DECREMENT",
    };
};
export const loginCreator=()=>{
    return{
        type:"LOGIN",
    };
};
export const logoutCreator=()=>{
    return{
        type:"LOGOUT",
    };
};