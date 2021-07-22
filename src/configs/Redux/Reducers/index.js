import LoadingReducer from "./LoadingReducer";
import ProductReducer from "./ProductReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    LoadingReducer,ProductReducer
})
export default reducers