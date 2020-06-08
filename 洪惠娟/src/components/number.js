import React,{Component} from 'react';
import Nav from './nav';
import Footer from './footer';
export default class Number extends Component{
       render(){
           return(
               <div> 
                     <Nav/>
                     <h1>我是number组件</h1>
                     <Footer/>
               </div>
           )
       }
}