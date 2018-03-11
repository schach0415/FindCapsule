'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { ParticipantItem } from '../'

/**
 * COMPONENT
 */
class ParticipantList extends React.Component {
    constructor(props){
        super(props)
        this.renderWithParticipant = this.renderWithParticipant.bind(this)
        this.renderWithoutParticipant = this.renderWithoutParticipant.bind(this)
    }

    render(){
        const participants = this.props.participants
        return (
            <div>
                {
                    !participants ?
                    this.renderWithoutParticipant() : this.renderWithParticipant()
                }
            </div>
        )
    }

    renderWithoutParticipant(){
        const eventId = this.props.eventId
        return (
            <div>
                <h2>Participants</h2>
                <Link to={`/events/${eventId}/participant-create`}>
                    <button>Request To Join</button>
                </Link>
                <p>There is no Participant.</p>
            </div>
        )
    }

    renderWithParticipant(){
        const { participants, eventId } = this.props
        return (
            <div>
                <div>
                    <h2>Participants</h2>
                    <Link to={`/events/${eventId}/participant-create`}>
                        <button>Request To Join</button>
                    </Link>
                </div>
                <div>
                    {
                        participants
                            .map(participant => (
                                <div>
                                    <span>{participant.email}</span>
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

export default connect(mapState)(ParticipantList)
