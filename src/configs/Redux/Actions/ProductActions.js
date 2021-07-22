import axios from "axios"
import { RootDevelopmentAPI } from "configs/API"
import { ISLOADING_GET } from "./LoadingAction"
export const FETCH_PRODUCT = 'FETCH_PRODUCT'

export const fetchProduct=()=>(dispatch)=>{
    return new Promise((resolve,reject)=>{
        dispatch({type : ISLOADING_GET, value :true})
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res)=>{
            console.log(res);
            const data = res.data
            resolve(true)
            dispatch({type : ISLOADING_GET, value : false})
            dispatch({type : FETCH_PRODUCT, value : data})
        }).catch(err=>{
            console.log(err);
            dispatch({type : ISLOADING_GET, value : false})
            reject(false)
        })
    })
}
