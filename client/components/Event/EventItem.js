'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeEvent } from '../../store'

/**
 * COMPONENT
 */
class EventItem extends React.Component {
    constructor(props){
        super(props)
        this.removeEventCallback = this.removeEventCallback.bind(this)
    }

    render(){
        const event = this.props.event
        return (
            <div>
                <Link to={`/events/${event.id}`}>
                <img src={event.imageUrl} />
                    <h3>{event.name}</h3>
                    <p>{event.capsules.length} capsule</p>
                </Link>
                {
                    event.capsules.length !== 0 ? null :
                    <button onClick={this.removeEventCallback}>Delete</button>
                }
            </div>
        )
    }

    removeEventCallback(evt){
        evt.preventDefault()
        const { removeEvent, event } = this.props
        removeEvent(event.id)
    }
}

/**
 * CONTAINER
 */
const mapState = null

const mapDispatch = dispatch => ({
    removeEvent: eventId => dispatch(removeEvent(eventId))
})

export default connect(mapState, mapDispatch)(EventItem)
