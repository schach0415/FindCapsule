'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CapsuleItem } from '../'

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
                <Link to="/events/:eventId/capsule-create">
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
                    <Link to="/events/:eventId/capsule-create">
                        <button>Add Capsule</button>
                    </Link>
                </div>
                <div>
                    {
                        capsules
                            // .reduce((accu, curr) =>
                            //     accu.slice(-1)[0].name !== curr.name,
                            //     []
                            // )
                            .map(capsule => (
                                <CapsuleItem
                                    key={capsule.id}
                                    capsule={capsule}
                                />
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
