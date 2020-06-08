import React from 'react'
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '@/components/home.js'
import '@/css/reset.css'
import '@/css/public.css'
class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/' component={Home} exact></Route>
                </Switch>
            </HashRouter>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("app")) 