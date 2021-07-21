import axios from 'axios'
const instance = axios.create({
    baseURL : `${process.env.REACT_APP_PUBLIC_API}`,
});
console.log('instance',instance);
instance.interceptors.response.use((response)=>response.data)
export default instance;