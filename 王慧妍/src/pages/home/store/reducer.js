import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage:1,
    showScroll:false
});
// 优化
// const changHomeData = (state,action) => {
//     return state.merge({
//         topicList:fromJS(action.topicList),
//         articleList:fromJS(action.articleList),
//         recommendList:fromJS(action.recommendList)
//     })
// }

export default (state=defaultState,action) => {
    switch(action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            // 优化：return changHomeData(state,action);
            return state.merge({
                topicList:fromJS(action.topicList),
                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList)
            })
        case actionTypes.ADD_HOME_LIST:
            return state.merge({
                articleList:state.get('articleList').concat(action.list),
                articlePage:action.nextPage
            });
        case actionTypes.TOGGLE_TOP:
            return state.set('showScroll',action.show);
        default:
            return state;
    }
}