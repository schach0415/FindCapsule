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
        this.renderWithCapsule = this.renderWithCapsule.bind(this)
        this.renderWithoutCapsule = this.renderWithoutCapsule.bind(this)
    }

    render(){
        const capsules = this.props.capsules
        console.log(capsules, !capsules)
        return (
            <div>
                {
                    !capsules ?
                    this.renderWithoutCapsule() : this.renderWithCapsule()
                }
            </div>
        )
    }

    renderWithoutCapsule(){
        const eventId = this.props.eventId
        return (
            <div>
                <h2>Capsules</h2>
                <Link to={`/events/${eventId}/capsule-create`}>
                    <button>Add Capsule</button>
                </Link>
                <p>There is no Capsule.</p>
            </div>
        )
    }

    renderWithCapsule(){
        const { capsules, eventId } = this.props
        return (
            <div>
                <div>
                    <h2>Capsules</h2>
                    <Link to={`/events/${eventId}/capsule-create`}>
                        <button>Add Capsule</button>
                    </Link>
                </div>
                <div>
                    {
                        capsules
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
