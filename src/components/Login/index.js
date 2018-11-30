import React from 'react'
import {connect} from 'react-redux' 
import {login} from '../../actions/user'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            password : '',
            showPassword: false
        }
    }

    handleLogin = () =>{
        this.props.login(this.state.password)
    }
    

    render(){
        const {classes} = this.props
        return (
            <h1>Login</h1>

        )
    }

}


const mapDispatchToProps = (dispatch) =>({
    login: (password) => dispatch(login(password))
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(Login))
