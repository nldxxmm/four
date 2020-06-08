import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default class Nav extends React.Component {//导出header组件
    render() {
        return (
            <div className="container-fluid" id="nav">
                        <nav>
                            <ul id="u1">
                                <li id="nav1"><NavLink to="/"><img src="src/img/index_bg.png" /></NavLink></li>
                                <li><p>股票代码<br />300624.SZ</p></li>
                            </ul>
                            <ul id="u2">
                                <li><NavLink to="/number">数字创意</NavLink></li>
                                <li><NavLink to="/work">办公效率</NavLink></li>
                                <li><NavLink to="/data">数据管理</NavLink></li>
                                <li><NavLink to="/news">新闻动态</NavLink></li>
                                <li><NavLink to="/investor">投资者关系</NavLink></li>
                                <li><NavLink to="/global">全球站点</NavLink></li>
                            </ul>
                        </nav>
            </div>

        )
    }
}