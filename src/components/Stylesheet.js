import React from 'react'
import './myStyle.css'

const inLine = {
    backgroundColor: 'red',
    color: 'white'
}

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
           <h2 className={`${className} font-xl`} style={inLine}>Hello Rahul</h2>             
        </div>
    )
}

export default Stylesheet               
