import {types} from "../types"

export const sayHelloAction = (text) => {
    return {
        // type: "Say_Hello"
        type: types.Say_Hello,
        payload: text
    }
}
// sayHelloAction()

export const clearTextAction = (user) => {
    return {
        // type: "Clear_Text"
        type: types.Clear_Text,
        payload: user
    }
}

export const  createUserAction = (user) => {
    return {
        type: types.CREATE_USER,
        payload: user
    }
}
// clearTextAction()

export const addNameAction = (name) => {
    return{
        type: types.ADD_NAME,
        payload:name
    }
}
export const deleteNameAction = (name) => {
    return{
        type: types.DELETE_NAME,
        payload:name

    }
}
