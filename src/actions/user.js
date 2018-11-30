import * as types from './types'
import axios from 'axios'
const basename = process.env.REACT_APP_API_BASE;

export function checkAuth(){
    return (dispatch, getState) => {
        axios.get(basename +'media-manager/api/login.php').then(({data}) => {
            console.log(data);
            dispatch(setAuth(data.loggedIn))
        })
    }
}

export function login(password){
    return (dispatch, getState) => {
        var params = new URLSearchParams();
        params.append('password', password);
        axios.post(basename +'media-manager/api/login.php', params).then(({data}) => {
            console.log(data)
            if(data.success){
                dispatch(setAuth(true))
            } else{
                alert('Wrong Password');
            }
        })
    }
}

export function logout(){
    return (dispatch, getState) => {
        axios.get(basename+ '/media-manager/api/logout.php').then(() => {
            dispatch(setAuth(false))
        })
    }
}

export function setAuth(loggedIn){
    return {
        type : types.SET_AUTH,
        loggedIn
    }
}
