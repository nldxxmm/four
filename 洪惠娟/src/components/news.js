import React, { Component } from 'react';
import Nav from './nav';
import Footer from './footer';
import $ from 'jquery';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


var styleA = {
    marginBottom: 100,
}
var styleB = {
    marginTop: 100,
    paddingRight: 10,
    overflow: "hidden",
    textAlign: "left",
    paddingTop:"20"
}
var styleCo={
    border: "#999 solid 1px",
}
var P={
    paddingTop:20,
}
var styleImage = {
    height: 180,
    width: 355,
    marginTop:20,
}
export default class Number extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        $.ajax({
            url: "src/components/news.json",
            dataType: "json",
            success: function (response) {
                this.setState({
                    data: response
                })
            }.bind(this)
        })
        // $("#eee").hover(function(){
        //     $(this).css("box-shadow","10px 10px 5px #888")
        // },function(){
        //     $(this).css("box-shadow","")
        // })
      
    }
    render() {
        let arr = this.state.data
        return (
            <div>
                <Nav />
                <div className="container" style={styleA}>
                    <div className="row">
                        {arr.map(function (items) {
                            return (
                                <div key={items.id} className="col-lg-4" style={styleB}>
                                    <div style={styleCo} id="eee">
                                        <p style={P}> {items.time}</p>
                                        <h4>{items.content}</h4>
                                        <img src={items.src} style={styleImage} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <Footer />
            </div>

        )
    }
}