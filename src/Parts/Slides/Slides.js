import axios from 'axios'
import Slider from 'Components/Slider/Slider'
import { RootDevelopmentAPI } from 'configs/API'
import actions from 'configs/Redux/Actions'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Slides extends Component {
    constructor(props){
        super(props)
        this.state={
            data : []
        }
    }
    componentDidMount = ()=>{
        const loadget = this.props.isLoadingGet
        console.log(loadget);
        if(!loadget){
            this.props.fetchProduct()
        }else{
            alert("times up")
        }
        // axios.get(`https://jsonplaceholder.typicode.com/users`).then((res)=>{
        //     console.log(res);
        // }).catch(err=>{
        //     console.log(err);
        // })
    }
    render() {
        const slides = this.state.data
        console.log(this.props.dataProduct);
        return (
            <div>
                <Slider slides={slides}/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    isLoadingGet : state.LoadingReducer.isLoadingGet,
    dataProduct : state.ProductReducer.dataProduct,
})
const mapDispatchToProps=(dispatch)=>({
    fetchProduct : ()=>dispatch(actions.fetchProduct())
})
export default connect(mapStateToProps,mapDispatchToProps)(Slides)
