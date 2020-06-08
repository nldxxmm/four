import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (data) => ({
    type:actionTypes.CHANGE_LIST,
    data:fromJS(data),
    // 把数据变为immutable类型
    totalPage:Math.ceil(data.length / 10)
    // 每页有10项，用总数/10，需要取整
})

export const searchFocus = () => ({
    type:actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type:actionTypes.SEARCH_BLUR
});
export const mouseEnter = () => ({
    type:actionTypes.MOUSE_ENTER
});
export const mouseLeave = () => ({
    type:actionTypes.MOUSE_LEAVE
});
export const changePage = (page) => ({
    type:actionTypes.CHANGE_PAGE,
    page
})


// 使用了redux-thunk可以直接返回一个函数
export const getList = () => {
    return (dispatch) => {
        axios.get("/api/headerList.json").then((res)=>{
            const data = res.data
            dispatch(changeList(data.data))
        }).catch(()=>{
            console.log("error")
        })
    }
}