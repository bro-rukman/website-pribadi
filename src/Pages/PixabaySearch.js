import React, { Component } from 'react'
// import {api} from 'Configs/axios/index'
import axios from 'axios';

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            data : {},
            course :[
                {name : "javascript", pelajaran : "ipa"},
                {name : "desain", pelajaran : "matematika"},
                {name : "digital marketing", pelajaran : "inggris"}
            ],
            filter : '',
            result : {},
            query : '',
            loading : false,
            message : ''
        }
        this.cancel = '';
    }
    handleInput=event=>{
        console.log(event.target.value);
        this.setState({
            filter : event.target.value
        })
    }
    componentDidMount(){
        api.get(`/course`).then((res)=>{
            this.setState({
                data : res.data,
                loading : false,
            })
        }).catch(error=>{
            throw error;
        })
    }
    // live
    handleOnInput=(e)=>{
        const query = e.target.value
        console.log(query);
        this.setState({query, loading:true, message:''}, ()=>{
            this.fetchUrl(1,query)
        })
    }
    renderResult = ()=>{
        const {results} = this.state;
        if (Object.keys(results).length && results.length) {
            return(
                <div>
                    {
                        results.map(res =>{
                            return(
                                <a key={res.id} href={res.previewURL} className="res-item">
                                    <p>{res.username}</p>
                                    <img src={res.previewURL} alt=""/>
                                </a>
                            )
                        })
                    }
                </div>
            )
        }
    }
    fetchUrl = (updatePageNo='', query)=>{
        const pageNumber = updatePageNo ? `&page=${updatePageNo}` : ''
        const url = `https://pixabay.com/api/?key=10523503-1781e72fe5d8d101007357cfb&q=${query}${pageNumber}`
        if (this.cancel) {
            this.cancel.cancel()
        }
        this.cancel = axios.CancelToken.source();
        axios.get(url,{
            cancelToken : this.cancel.token
        }).then((res)=>{
            console.log(res.data);
            const resultNotFound = ! res.data.hits.length ? "There are no result" : "";
            this.setState({
                result : res.data.hits,
                message : resultNotFound,
                loading : false
            })
        })
        .catch(error=>{
            if (axios.isCancel(error) || error) {
                this.setState({
                    loading:false,
                    message : "Failed to loading data"
                })
            }
        })
    }
    render() {
        const {query} = this.state;
        const {filter,course} = this.state;
        const lowerCaseFilter = filter.toLowerCase();
        const filterData = course.filter(item=>{
            return Object.keys(item).some(key=>
                item[key].toLowerCase().includes(lowerCaseFilter)
            );
        })
        // let item = data.filter((data)=>{
        //     if(this.state.search == null){
        //         return data
        //     }else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.deskripsi.toLowerCase().includes(this.state.search.toLowerCase())){
        //         return data
        //     }
        // })
        return (
            <div>
                <h2>list item</h2>
                <input type="text" placeholder="search" value={filter} onChange={this.handleInput}/>
                <div>
                    {
                       filterData.map(item=>(
                           <div key={item.name}>
                               <p>{item.name}</p>
                           </div>
                       ))
                    }
                </div>
                <input type="text" name="query" placeholder="search..." value={query} id="" onChange={this.handleOnInput}/>
                <div>
                    <p>{this.renderResult}</p>
                </div>
            </div>
        )
    }
}
