import React from 'react'
import '@/css/footer.css'
import { NavLink } from 'react-router-dom'
export default class Banner extends React.Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-10'>
                            <div className='row'>
                                <div className='item col-md-3 col-sm-3 col-xs-6'>
                                    <div className='column'></div>
                                    <div className='foot_logo columns'>
                                        <img src='./src/img/footer_logo.jpg' />
                                    </div>
                                </div>

                                <div className='item col-md-3  col-sm-3 col-xs-6'>
                                    <div className='column'>
                                        <div className='columns'>
                                            <p className='p1'>关于我们</p>
                                            <ul className='itemul'>
                                                <li><NavLink to='/'>产品简介</NavLink></li>
                                                <li><NavLink to='/'>产品简介</NavLink></li>
                                                <li><NavLink to='/'>产品简介</NavLink></li>
                                                <li><NavLink to='/'>产品简介</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>

                                <div className='item col-md-3  col-sm-3 col-xs-6'>
                                    <div className='column'>

                                        <div className='columns'>
                                            <p className='p1'>关于我们</p>
                                            <ul className='itemul'>
                                                <li><NavLink to='/'>产品简介</NavLink></li>
                                                <li><NavLink to='/'>产品简介</NavLink></li>
                                                <li><NavLink to='/'>产品简介</NavLink></li>
                                                <li><NavLink to='/'>产品简介</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className='item col-md-3  col-sm-3 col-xs-6'>
                                    <div className='column'>
                                        <div className='columns'>
                                            <p className='p1'>关于我们</p>
                                            <ul className='itemul'>
                                                <li><NavLink to='/'>产品简介</NavLink></li>
                                                <li><NavLink to='/'>产品简介</NavLink></li>
                                                <li><NavLink to='/'>产品简介</NavLink></li>
                                                <li><NavLink to='/'>产品简介</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className='item col-md-2   col-sm-3 col-xs-3'>
                            <div className='column columnr'>
                                <div className='columns foot_about'>
                                    <ul>
                                        <li>
                                            <div><img src='./src/img/vb.png' /></div>
                                        </li>
                                        <li>
                                            <div><img src='./src/img/inshare.png' /></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>






                    </div>

                    <div className='hr'>
                    </div>
                    <div className='foot-bottom'>
                        <p>
                            CopyRight © 2020 云梦天翼 All Rights Reserved 京ICP备20006528号
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}