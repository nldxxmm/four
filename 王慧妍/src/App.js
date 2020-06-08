import React, { Component } from 'react';
import Header from './common/header'
import store from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <Route path="/" component={Home} exact />
                        <Route path="/login" component={Login} exact />
                        <Route path="/write" component={Write} exact />
                        <Route path="/detail/:id" component={Detail} exact />
                    </div>
                </Router>
            </Provider>
        );
    }
}
 
export default App;