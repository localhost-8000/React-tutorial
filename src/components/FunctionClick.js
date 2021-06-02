import React from 'react'

function functionClick() {
    function clickHandler() {
        console.log('Button clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>Click me</button> 
            {/* {//dont's use clickHandler()} */}
        </div>
    )
}

export default functionClick