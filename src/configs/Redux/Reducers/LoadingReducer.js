import { ISLOADING_GET,ISLOADING_POST } from "../Actions/LoadingAction";

const initState = {
    isLoadingGet : false,
    isLoadingPost : false
}
const loadingReducer=(state=initState, action)=>{
    switch (action.type) {
        case ISLOADING_GET:
            return{
                ...state,
                isLoadingGet : state.isLoadingGet
            }
        case ISLOADING_POST:
            return{
                ...state,
                isLoadingPost : state.isLoadingPost
            }
        default:
            return state;
    }
}
export default loadingReducer