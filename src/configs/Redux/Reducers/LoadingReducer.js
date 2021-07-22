import { ISLOADING_GET,ISLOADING_POST } from "../Actions/LoadingAction";

const initState = {
    isLoadingGet : false,
    isLoadingPost : false
}
const LoadingReducer=(state=initState, action)=>{
    switch (action.type) {
        case ISLOADING_GET:
            return{
                ...state,
                isLoadingGet : action.value
            }
        case ISLOADING_POST:
            return{
                ...state,
                isLoadingPost : action.value
            }
        default:
            return state;
    }
}
export default LoadingReducer