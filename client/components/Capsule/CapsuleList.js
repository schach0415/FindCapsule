'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {  } from '../../store'

/**
 * COMPONENT
 */
class CapsuleList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const capsule = this.props.capsule
        return (
            <div>
                {
                    !capsules ?
                    this.renderWithoutCapsule() : this.renderWithoutCapsule()
                }
            </div>
        )
    }

    renderWithoutCapsule(){
        return (
            <div>
                <h2>Capsules</h2>
                <Link to="/capsule-create">
                    <button>Add Capsule</button>
                </Link>
            </div>
        )
    }

    renderWithCapsule(){
        return (
            <div>
                <div>
                    <h2>Capsules</h2>
                    <Link to="/capsule-create">
                        <button>Add Capsule</button>
                    </Link>
                </div>
                <div>
                    {
                        capsules.map(capsule => (
                            <div key={capsule.id}>
                                <div>
                                    <img src={capsule.imageUrl}/>
                                    <h4>{capsule.name}</h4>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = null

export default connect(mapState)(CapsuleList)
