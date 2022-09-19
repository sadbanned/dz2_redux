import { combineReducers } from "redux";
import { titleReducer} from "./titleReduser";
import { createUserReducer } from "./createUserReduser";


export const rootReducer = combineReducers({
    title: titleReducer,
    users: createUserReducer
})