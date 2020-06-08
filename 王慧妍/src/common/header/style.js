import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
    z-index:1;
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`

export const Logo = styled.div`
    position:absolute;
    display:block;
    height:56px;
    width:100px;
    background:url(${logoPic});
    background-size:contain;
`

export const Nav = styled.div`
    width:960px;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
    height:100%;
`

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color:#969696;
    }
    &.active {
        color:#ea6f5a;
    }
`
export const NavSeach = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    margin-left:20px;
    background:#eee;
    margin-top:9px;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter {
        transition:all .2s ease-out;
    }
    &.slide-enter-active {
        width:240px;
    }
    &.slide-exit {
        transition:all .2s ease-out;
    }
    &.slide-exit-active {
        width:160px;
    }
`
export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`

export const SearchInfo = styled.div`
    position:absolute;
    top:56px;
    left:0;
    width:240px;
    padding:0 20px;
    background:#fff;
    box-shadow:0 0 8px rgba(0,0,0,.2);
`

export const SearchInfoTitle = styled.div`
    z-index:999;
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;

`

export const SearchInfoSwitch = styled.div`
    font-size:13px;
    float:right;
    cursor:pointer;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition:all .3s ease-in;
        transform-origin:center center;
    }
`

export const SearchInfoList = styled.div`
    overflow:hidden;
`

export const SearchInfoItem = styled.a`
    display:block;
    float:left;
    font-size:12px;
    padding:0 5px;
    line-height:20px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:2px;
    margin-right:10px;
    margin-bottom:15px;
`



export const Addition = styled.div`
    position:absolute;
    top:0;
    right:0;
    height:56px;
`

export const Button = styled.div`
    float:right;
    line-height:38px;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`