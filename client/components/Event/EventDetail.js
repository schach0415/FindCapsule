'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchEvent } from '../../store'
import { CapsuleList, RadarList, ParticipantList } from '../'

/**
 * COMPONENT
 */
class EventDetail extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchEvent()
    }

    render(){
        const event = this.props && this.props.event
        return (
            <div>
                <div>
                    <div>
                        <h1>{event.title}</h1>
                        <Link to={`/events/${event.id}/edit`}>
                            <button>Edit</button>
                        </Link>
                    </div>
                    <img src={event.imageUrl}/>
                    <p>
                        Start : {event.startDate} ~ End : {event.endDate}
                    </p>
                    <h4>{event.purpose}</h4>
                    <p>{event.note}</p>
                </div>
                <CapsuleList
                    capsules={event.capsules}
                    eventId={event.id}
                />
                <RadarList radars={event.radars} />
                <ParticipantList participants={event.participant} />
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = ({ event }) => {
    return {
        event
    }
}

const mapDispatch = (dispatch, ownProps) => {
    const paramId = ownProps.match.params.eventId
    return {
        fetchEvent: () => dispatch(fetchEvent(paramId))
    }
}

export default connect(mapState, mapDispatch)(EventDetail)
