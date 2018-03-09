'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
class CapsuleList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const capsules = this.props.capsules
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
                <p>There is no Capsule.</p>
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
                        capsules
                            .reduce((accu, curr) =>
                                accu.slice(-1)[0].name !== curr.name,
                                []
                            )
                            .map(capsule => (
                                <div key={capsule.id}>
                                    <div>
                                        <img src={capsule.imageUrl}/>
                                        <h4>{capsule.name}</h4>
                                        <p>{capsule.quentity}</p>
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
