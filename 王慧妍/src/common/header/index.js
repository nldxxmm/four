import React,{ Component }  from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as LoginactionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSeach,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';

class Header extends Component {
    getListArea(){
        const { list ,focused , page,totalPage , mouseIn ,handleMouseEnter,handleMouseLeave,handleChangePage } = this.props
        const newList = list.toJS();// 把list转换为了JS类型
        const pageList = [];
        // 如果最后一页不足10条数据，要如何判断？
        // 鼠标的滑入滑出，也会触发ajax请求？
        if(newList.length){
            for(let i = (page - 1) * 10;i < page * 10; i++){
                if(newList[i]){
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                        // list不支持list[i]这种写法，因为list是immutable类型
                    )
                }
            }
        }
        if(focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                            <span ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe77a;</span>
                            换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render() {
        const { focused,handleInputFocus,handleInputBlur,list,login,logout } = this.props
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ? <NavItem onClick={logout} className="right">退出</NavItem> : 
                        <Link to="/login"><NavItem className="right">登陆</NavItem></Link>
                    }
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSeach
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                                className={focused ? 'focused' : ''}
                            ></NavSeach>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe682;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write" >
                        <Button className="writting">
                            <span className="iconfont">&#xe615;</span>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const mappropsToProps = (state) => {
    return {
        // 之前的state的数据并不是immutable由于使用了redux-immutable让state变成了immutable对象，需要调用get方法获取header的内容，整个对数据操作达到了统一
        focused:state.getIn(['header','focused']),
        // 意为：从state中取值，取header下的focused这个值
        // 等价写法：state.get('header').get("focused")
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn']),
        login:state.getIn(['login','login'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            (list.size === 0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        },
        logout(){
            dispatch(LoginactionCreators.logout())
        }
    }
}
export default connect(mappropsToProps,mapDispatchToProps)(Header)