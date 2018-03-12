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
    }

    render(){
        const { capsules, eventId } = this.props
        if(!capsules) return null
        return (
            <div>
                <div className="center" >
                    <h2>Capsules</h2>
                    <Link to={`/events/${eventId}/capsule-create`}>
                        <button>Add Capsule</button>
                    </Link>
                </div>
                {
                    !capsules[0] ?
                    (<div className="center" ><p>There is no Capsule.</p></div>) : 
                    this.renderWithCapsule()
                }
            </div>
        )
    }

    renderWithCapsule(){
        const { capsules, eventId } = this.props
        return (
            <div>
                <div className="line-up" >
                    <div className="for-one" >
                        <div className="list-view">
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
                    <div>
                        <span>Real Map needs to be here</span>
                        <img className="fake-img toRight" src='http://nyc-defenselawyers.com/images/map.jpg' />
                    </div>
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
