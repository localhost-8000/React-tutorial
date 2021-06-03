import React, { Component } from 'react'

export class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {

        return this.state.isLoggedIn && <h2>Welcome Rahul</h2>
        
        // return this.state.isLoggedIn ? ( <h2>Welcome Rahul</h2> ) : ( <h2>Welcome Guest</h2> )


        // let message 
        // if(this.state.isLoggedIn) {
        //     message = <h2>Welcome Rahul</h2>
        // } else {
        //     message = <h2>Welcome Guest</h2>
        // }

        // return <div>{message}</div>

        // if(this.state.isLoggedIn) {
        //     return <h2>Welcome Rahul</h2>
        // } else {
        //     return <h2>Welcome Guest</h2>
        // }

        // return (
        //     <div>
        //         <h2>Welcome Rahul</h2>
        //         <h2>Welcome Guest</h2>
        //     </div>
        // )
    }
}

export default UserGreeting