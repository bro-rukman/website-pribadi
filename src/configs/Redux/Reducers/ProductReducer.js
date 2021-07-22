import { FETCH_PRODUCT } from "../Actions/ProductActions";

const initState ={
    dataProduct : {}
}
const ProductReducer=(state = initState, action)=>{
    switch (action.type) {
        case FETCH_PRODUCT:
            return{
                ...state,
                dataProduct : action.value
            }
        default:
            return state;
    }
}
export default ProductReducer