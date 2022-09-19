import { types } from "../types";

const initialState = {
    users: [],
    name: ""
}

export const createUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.CREATE_USER:
            return{...state, users:[...state.users, action.payload]}
            case types.ADD_NAME:
                return{...state, name:action.payload}
                case types.DELETE_NAME:
                    return{...state, name: ""}
            default: 
            return state
    }
}