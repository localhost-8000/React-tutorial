import React, { Component } from 'react'

export class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Rahul'
        }
        console.log('lifecycle A constructor');
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('lifecycle A getderived method');
        return null
    }

    componentDidMount() {
        console.log('lifecycleA componentdidmount');
    }


    render() {
        console.log('lifecycle A render');
        return (
            <div>
                LifeCycleA
            </div>
        )
    }
}

export default LifeCycleA
