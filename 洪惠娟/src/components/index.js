import React, { Component } from 'react';
import '../css/index.css';
import Nav from './nav';
import Content from './content';
import Footer from './footer';
import $ from 'jquery'

export default class Index extends Component {
    componentDidMount() {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 600) {
                $("#di").css({ "display": "block" });
            } else {
                $("#di").css({ "display": "none" });
            }
        })
        $("#di").click(function () {
            $(window).scrollTop(0);
        })
    }
    render() {
        return (
            <div>
                <Nav />
                <Content />
                <Footer />
                <div id="di"><p id="gototop"></p></div>
            </div>
        )
    }
}