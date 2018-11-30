import React, { Component } from "react";
import {connect} from 'react-redux'
import {checkAuth} from '../actions/user'
import Login from '../components/Login'

class EnsureAuth extends Component{

    componentDidMount(){
        this.props.checkAuth()
    }

    render(){
        const {auth} = this.props;
        return (
            auth.loggedIn? this.props.children: <Login/>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    checkAuth : () => dispatch(checkAuth())
})

const mapStateToProps = (state) => ({
    auth : state.auth
})


export default connect(mapStateToProps, mapDispatchToProps)(EnsureAuth);