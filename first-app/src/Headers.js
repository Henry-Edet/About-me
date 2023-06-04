import React from "react"

// this is a component for header
export default Headers = ()=> {
    return (
        <div className="header">
            <nav id='head'>
                <img src="./logo512.png" className="reactlogo" width="40px" alt='react image'/>
                <p id="reactfacts">ReactFacts</p>
                <ul className='navlist'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>contact us</li>
                </ul>
            </nav>
        </div>
    )
}