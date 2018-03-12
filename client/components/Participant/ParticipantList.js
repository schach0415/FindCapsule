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
    }

    render(){
        const { participants, eventId } = this.props
        return (
            <div>
                 <h2>Participants</h2>
                    <Link to={`/events/${eventId}/participant-create`}>
                        <button>Request To Join</button>
                    </Link>
                <p>There is {!participants ? null : participants.length} Participant.</p>
                {
                    !participants ?
                    null : this.renderWithParticipant()
                }
            </div>
        )
    }

    renderWithParticipant(){
        const participants = this.props.participants
        return (
            <div>
                <h3>List of Treasure Hunters</h3>
                <select>
                    {
                        participants
                            .map(participant => (
                                <option key={participant.id} >
                                    {`"${participant.email}" collects ${participant.spots.length} Capsules`}
                                </option>     
                        ))
                    }
                </select>
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = null

export default connect(mapState)(ParticipantList)
