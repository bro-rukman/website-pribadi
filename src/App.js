import React,{Component} from 'react'
import 'Assets/scss/style.scss'
import PortfolioReact from './Pages/Portfolio'

import {BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import PortfolioCss from './Pages/PortfolioCss'
import LandingPage from 'Pages/LandingPage'
import Resume from './Pages/Resume'
import Profile from './Pages/Profile'
import Slides from 'Parts/Slides/Slides'
import { Provider } from 'react-redux'
import {store} from 'configs/Redux'

class App extends Component {
  render(){
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/resume" exact component={Resume}/>
                    <Route path="/portfolioreact" component={PortfolioReact}/>
                    <Route path="/portfoliocss" component={PortfolioCss}/>
                    <Route path="/slides" component={Slides}/>
                </Switch>
            </Router>
        </Provider>
    )
  }
}

export default App;
