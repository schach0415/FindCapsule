'use strict';

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';

/**
 * COMPONENT
 */
class Main extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>Find Capsule</h1>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
                <Link to="/home">
                    <button>Guest</button>
                </Link>
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = null

export default connect(mapState)(Main)
