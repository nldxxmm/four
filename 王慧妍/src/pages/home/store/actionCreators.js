import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const changeHomeData = (result) => ({
    type:actionTypes.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            dispatch(changeHomeData(result))
        })
    }
}

const AddHomeList = (list,nextPage) => ({
    type:actionTypes.ADD_HOME_LIST,
    list:fromJS(list),
    nextPage
})

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then((res) => {
            const result = res.data.data;
            dispatch(AddHomeList(result,page + 1))
        })
    }
}

export const toggleScroll = (show) => ({
    type:actionTypes.TOGGLE_TOP,
    show
})