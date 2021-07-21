import Slider from 'Components/Slider/Slider'
import { RootDevelopmentAPI } from 'configs/API'
import React, { Component } from 'react'

export default class Slides extends Component {
    constructor(props){
        super(props)
        this.state={
            data : []
        }
    }
    componentDidMount=async()=>{
        const res = await fetch(`${RootDevelopmentAPI}/slides`)
        const resJson  = await res.json()
        this.setState({data : resJson})
    }
    render() {
        const slides = this.state.data
        return (
            <div>
                <Slider slides={slides}/>
            </div>
        )
    }
}
