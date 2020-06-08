import React, { Component } from 'react';
import $ from 'jquery';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


var styleFooter = {
    backgroundColor: "#000",
    color: "#fff",
    overflow: "hidden",
    paddingTop: 50,
    textAlign: "center"
}
var styleB = {
    width: 300,
    height: 200
}
var styleC = {
    width: 150,
    height: 100,
}

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        $.ajax({
            url: "src/components/footer.json",
            dataType: "json",
            success: function (response) {
                this.setState({
                    data: response
                })
            }.bind(this)
        })
    }

    render() {
        let arr = this.state.data
        return (

            <footer style={styleFooter}>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-ms-6 col-xs-12">
                            <img src="src/img/footer-left.svg" style={styleB} />
                        </div>

                        <div className="col-lg-3 col-md-3 col-ms-6 col-xs-12 fot1">
                            <h3>关于我们</h3>
                            <ul>
                                {arr.map(function (items) {
                                    return (
                                        <li key={items.id}>{items.name}</li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 col-ms-6 col-xs-12 fot1">
                            <h3>联系我们</h3>
                            <ul>
                                {arr.map(function (items) {
                                    return (
                                        <li key={items.id}>{items.contact}</li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 col-ms-6 col-xs-12 fot1">
                            <h3>集团成员</h3>
                            <ul>
                                <li><img src="src/img/footer1.svg" style={styleC} /></li>
                                <li><img src="src/img/footer2.svg" style={styleC} /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 uu" >
                            <p>万兴科技集团股股份有限公司&nbsp;版权所有</p>
                            <ul>
                                <li>藏ICP备17000062号-4&nbsp;&nbsp;</li>
                                <li>法律声明&nbsp;|&nbsp;</li>
                                <li>隐私政策&nbsp;|&nbsp;</li>
                                <li>许可协议</li>
                            </ul>

                        </div>
                        <div className="col-lg-6 ll" >
                            <p>关注我们</p>
                        </div>

                    </div>
                </div>

            </footer>

        )
    }
}