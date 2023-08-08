import { applyMiddleware, createStore } from "redux";
import { movieReduser } from "../Redusers/movieReduser";
import thunk from "redux-thunk";
//2 creat store
export const store = createStore(movieReduser, applyMiddleware(thunk));