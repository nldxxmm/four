import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Index from './components/index.js';
import Number from './components/number.js';
import Work from './components/work.js';
import Data from './components/data.js';
import News from './components/news.js';
import Investor from './components/investor.js';
import Global from './components/global.js';
import {HashRouter,Route,Switch} from 'react-router-dom';
class Hello extends Component{
    render(){
        return(
            <HashRouter> 
                <Switch>
                    <Route path="/" component={Index} exact/>
                    <Route path="/number" component={Number}/>
                    <Route path="/work" component={Work}/>
                    <Route path="/data" component={Data}/>
                    <Route path="/news" component={News}/>
                    <Route path="/investor" component={Investor}/>
                    <Route path="/global" component={Global}/>
                </Switch>
            </HashRouter>
        )
    }
}

ReactDom.render(
    <Hello/>,
    document.getElementById("app")

)