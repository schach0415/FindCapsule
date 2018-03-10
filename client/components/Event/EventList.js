'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { EventItem } from '../'

/**
 * COMPONENT
 */
class EventList extends React.Component {
    constructor(props){
        super(props)
        this.renderWithEvent = this.renderWithEvent.bind(this)
    }

    render(){
        const events = this.props.events
        return (
            <div>
                {
                    !events[0] ?
                    this.renderWithoutEvent() : this.renderWithEvent()
                }
            </div>
        )
    }

    renderWithoutEvent(){
        return (
            <div>
                <h2>Events</h2>
                <Link to="/event-create">
                    <button>Add Event</button>
                </Link>
                <p>There is no Event.</p>
            </div>
        )
    }

    renderWithEvent(){
        const { events, userId } = this.props
        return (
            <div>
                <div>
                    <h2>Events</h2>
                    <Link to="/event-create">
                        <button>Add Event</button>
                    </Link>
                </div>
                <div>
                    {
                        events
                            .map(event => (
                                <EventItem
                                    key={event.id}
                                    userId={userId}
                                    event={event}
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
const mapState = ({ user }) => {
    const userId = user.id
    return { userId }
}

export default connect(mapState)(EventList)