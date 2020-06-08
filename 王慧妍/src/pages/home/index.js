import React, { PureComponent } from 'react'
import Topic from './components/Topic'
import Writer from './components/Writer'
import List from './components/List'
import Recommend from './components/Recommend'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackToTop
} from './style'
class Home extends PureComponent {
    handleToTop(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4965/5474ffbec4298269f8d4c9a1faf66102cf97f6e9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                { this.props.showScroll ? <BackToTop onClick={this.handleToTop}>顶部</BackToTop> : null}
                
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData()
        this.bindEvent()
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.props.changeScrollTopShow)
    }
    bindEvent() {
        window.addEventListener("scroll",this.props.changeScrollTopShow)
    }
}
const mapState = (state) => ({
    showScroll:state.getIn(['home','showScroll'])
})


const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        console.log()
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleScroll(true))
        }else{
            dispatch(actionCreators.toggleScroll(false))
        }
    }
})

export default connect(mapState,mapDispatch)(Home)