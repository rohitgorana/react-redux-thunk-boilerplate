import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){

        return (
            <h1>Home</h1>
        )
    }

}

const mapDispatchToProps = (dispatch) =>({

})

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
