import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused:false,
    // 由于list是使用immutable创建的所以list是一个immutable数组
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
});
export default (state=defaultState,action) => {
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            // immutable对象的set方法会结合之前immutable对象的值和设置的值返回一个全新的对象
            return state.set("focused",true);
        case actionTypes.SEARCH_BLUR:
            return state.set("focused",false);
        case actionTypes.CHANGE_LIST:
            // 单纯的返回action.data的话，action.data是一个普通的数组，而list是一个immutable数组，所以会出错，要去根源上找然后改变为immutable
            // state.set('list',action.data).set('totalPage',action.totalPage); 等价于下面的写法
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
        case actionTypes.MOUSE_ENTER:
            return state.set("mouseIn",true);
        case actionTypes.MOUSE_LEAVE:
            return state.set("mouseIn",false);
        case actionTypes.CHANGE_PAGE:
            return state.set("page",action.page);
        default:
            return state;
    }
}