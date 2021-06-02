import React, { Component } from 'react'

export class EventBind extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello Rahul'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
    // this keyword is undefined in event handler methods, hence its necessary to bind
    clickHandler() {
        this.setState({
            message: 'Good Bye, Rahul'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  First approach...*/}
                {/* <button onClick={() => this.clickHandler()}>Click</button>  Second approach.. */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
