// redux-immutable提供了一个combineReducers生成的reducer数据内容就是一个immutable的数据内容
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer} from '../common/header/store'
import { reducer as homeReducer} from '../pages/home/store'
import { reducer as detailReducer} from '../pages/detail/store'
import { reducer as loginReducer} from '../pages/login/store'
const reducer = combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer
})
export default reducer