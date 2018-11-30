import { combineReducers } from "redux";
import createReducer from '../util/createReducer';
import * as types from '../actions/types'

export const auth = createReducer({loggedIn: false}, {
    [types.SET_AUTH](state, action){
        return {loggedIn: action.loggedIn}
    }
})


export default combineReducers({auth});