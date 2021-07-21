
// // guestroute

// import React,{} from 'react'
// import {Route,Redirect,withRouter} from 'react-router-dom'

// const GuestRoute = ({component : Component, location, ...rest})=>{
//     const ok = localStorage.getItem("POHONPENGETAHUANTAMBAHILMU : token")
//     const params = location?.search.substring(1).split("&")
//     const path = params.find(item => item.indexOf("path") > -1)
//     const redirect = path?.split("=")?.[1]

//     if (!ok && redirect ) localStorage.setItem("POHONPENGETAHUANTAMBAHILMU:redirect", redirect)

//     return(
//         <Route 
//             {...rest}
//             render={props => ok ? <Redirect to={`/`} /> : <Component {...props}/>}
//         />
//     )
// }
// export default withRouter(GuestRoute)

// // memberroute
// import React from 'react'
// import {Route,Redirect,withRouter} from 'react-router-dom'

// const MemberRoute = ({component : Component, match, path,location, ...rest})=>{
//     const ok = localStorage.getItem("POHONPENGETAHUANTAMBAHILMU : token")
//     console.log('rest',rest);
//     localStorage.removeItem("POHONPENGETAHUANTAMBAHILMU: redirect")
//     return(
//         <Route 
//             {...rest}
//             render={
//                 (props) => ok ? <Component {...props} /> : path === "/joined/:class" ? <Redirect to={`/login?path=${location.pathname}`}/> : <Redirect to={`private?path=${location.pathname}`}/>
//             }
//         />
//     )
// }
// export default withRouter(MemberRoute)

// // config auth header

// import axios from './index'

// // eslint-disable-next-line
// export default (token = null) => {
//     if (token) axios.defaults.headers.common.authorization = token;
//     // eslint-disable-next-line
//     else axios.defaults.headers.common.authorization;
// };

