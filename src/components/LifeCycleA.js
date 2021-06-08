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

    shouldComponentUpdate() {
        console.log('shouldcomponent update');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getsnapshotbeforeupdate');
        return null
    }

    componentDidUpdate() {
        console.log('component did update');
    }


    changeState = () => {
        this.setState({
            name: 'Ankur'
        })
    }

    render() {
        console.log('lifecycle A render');
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change state</button>
            </div>
        )
    }
}

export default LifeCycleA
