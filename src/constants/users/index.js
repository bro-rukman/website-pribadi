import axios from 'configs/axios'

export default () {
    all : (credential)=>axios.post(`/users`,credential)
}