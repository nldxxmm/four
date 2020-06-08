import React from 'react'
import Header from '@/components/header.js'
import Content from '@/components/content.js'
import Footer from '@/components/footer.js'

export default class Hello extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        ) 
    }
}