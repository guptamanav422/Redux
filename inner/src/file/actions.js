// actions are just objects 

// when wirting actions in redux we create something called action creater function 

export const incrementCreator=()=>{
    return{
        type:"INCREMENT",
    };
};

export const decrementCreator=()=>{
    return{
        type:"DECREMENT",
    };
};