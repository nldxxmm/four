import React from 'react';
import { NavLink } from 'react-router-dom'
import '@/css/header.css'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nav: {}
        }
    }
    componentDidMount() {
        fetch('http://mock.shtodream.cn/mock/5ed146489a69db61e52e8792/react-project1/nav', {
            method: 'get',
            dataType: 'json',
            mode: 'cors',
        }).then(reponse => reponse.json()).then(res => {
            this.setState({
                nav: res
            })

        })
    }
    render() {
        const obj = this.state.nav
        return (
            <header>
                <div className='bot'></div>
                <div className='fix'>
                    <div className="container">
                        <div className='header_logo'>
                            <img src='./src/img/header_logo.jpg' />
                        </div>
                        <div className='header_nav'>
                            <ul className='headnav'>
                                {obj ? Object.keys(obj).map(items => 
                                        (
                                            <li key={items}>
                                                <NavLink to={obj[items].firstNav.to}>
                                                    {obj[items].firstNav.name}
                                                </NavLink>
                                            </li>
                                        )
                                ) : null}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}


