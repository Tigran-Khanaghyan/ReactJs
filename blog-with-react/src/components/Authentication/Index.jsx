import React from 'react'
import Login from './Login'

export default class Authentication extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            isLoggedIn: true,
        }
    }

    render () {
        const {isLoggedIn} = this.state
        let logName = isLoggedIn ? "Log Out" : "Log in"
        return (
            <Login logName={logName}/>

        )
    }
}