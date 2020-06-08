import React from 'react'
import '@/css/content.css'

export default class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        return fetch('http://mock.shtodream.cn/mock/5ed146489a69db61e52e8792/react-project1/react_project1_index_cont_section3', {
            method: 'get',
            dataType: 'json',
            mode: 'cors',
        }).then(response => response.json()).then(res => {
            this.setState({ data: res })
        })
    }
    render() {
        var obj = this.state.data
        var objNew = obj.data
        return (
            <section>
                <ul>
                    <li className='s-section'>
                        <div className='banner'>
                            <div className="container">
                                <div className='contain_txt'>
                                    <p className='p1'>空 乘 就 业 第 一 品 牌</p>
                                    <p className='p2'>The first brand of stewardess training</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='s-section'>
                        <div className='container'>
                            <div className='column'>
                                <div>
                                    <img src='./src/img/index_cont_section2.jpg' />
                                </div>
                                <div className='artic'>
                                    <div className='txt'>
                                        <p>
                                            <span>●云端之上 不负韶华●</span>
                                        </p>
                                        <p>
                                            <span>●圆梦蓝天 为梦添翼●</span>
                                        </p>
                                    </div>
                                    <h1>
                                        从这里开启你的空乘梦想
                                    </h1>
                                </div>
                                <div className='button-group'>
                                    <a href='https://skydream.fanqier.cn/f/kvenscxc'>点击在线报名</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='s-section'>
                        <div className='container'>
                            <div className='row'>
                                <div className='column'>
                                    <div className='artic ss'>
                                        <p className='p1'>未来的你，在这里</p>
                                        <p className='p2'>让机遇如期而遇 让未来现在就来</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row list'>
                                {objNew ? Object.keys(objNew).map(items => {
                                    return (
                                        <div key={items} className='item col-md-3  col-sm-3 col-xs-6' >
                                            <div className='column'>
                                                <div>
                                                    <img src={objNew[items].img} />
                                                </div>
                                                <div className='txt'>
                                                    <h1 className='title'>{objNew[items].name}</h1>
                                                    <h3>{objNew[items].institutions}</h3>
                                                    <p>{objNew[items].place}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : null}

                            </div>
                        </div>
                    </li>
                </ul>
            </section>


        )
    }
}

