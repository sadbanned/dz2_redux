import {types} from "../types"

const initialState = {
    title: ""
}


export const titleReducer = (state = initialState, action) => {
    // if(action.type === "Say_Hello"){
    //     return{
    //         ...state, title: "Hello world"
    //     }
    // }
    // else if (action.type === "Clear_Text") {
    //     return{
    //         ...state, title: ""
    //     }
    // }
    // return state

    switch(action.type) {
        case types.Say_Hello:
            return{...state, title:action.payload}
        case types.Clear_Text:
            return{...state, title: ""}
            default:
                return state
    }
}