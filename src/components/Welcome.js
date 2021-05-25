import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
            <h1>This is a Class Component props hii {this.props.name}</h1>
            <h3>{this.props.children}</h3>
            </div>
        )
    }
}

export default Welcome