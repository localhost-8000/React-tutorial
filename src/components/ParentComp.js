import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Rahul'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Rahul'
            })
        }, 2000)
    }

    render() {
        console.log('parent comp render');
        return (
            <div>
                Parent component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
