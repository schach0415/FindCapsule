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
                <div className="center" >
                    <h1>Events</h1>
                    <Link to="/event-create">
                        <button>Create Event</button>
                    </Link>
                </div>
                {
                    !events[0] ?
                    (<div className="center" ><p>There is no Event.</p></div>) :
                    this.renderWithEvent()
                }
            </div>
        )
    }

    renderWithEvent(){
        const { events, userId } = this.props
        return (
            <div>
                <div className="event-list" >
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
