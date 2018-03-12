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
        this.state = {
            event: this.props.event,
            radars: this.props.radars,
        }
    }

    componentDidMount(){
        this.props.fetchEvent()
    }

    componentWillReceiveProps(newProps, oldProps){
        if (newProps.event !== oldProps){
            this.setState({
                event: newProps.event
            })
        }
        if (newProps.radars !== oldProps){
            this.setState({
                radars: newProps.radars
            })
        }
    }

    render(){
        const event = this.state.event
        const radars = this.state.radars
        return (
            <div>
                <div>
                    <div className="line-up center" >
                        <h1>{event.title}</h1>
                        <Link to={`/events/${event.id}/edit`}>
                            <button>Edit</button>
                        </Link>
                    </div>
                    <div className="center" >
                        <img className="single-img" src={event.imageUrl}/>
                    </div>
                    <div className="center" >
                        <p>
                            Start : {event.startDate} ~ End : {event.endDate}
                        </p>
                    </div>
                    <div className="center" >
                        <h3>{event.purpose}</h3>
                    </div>
                    <div className="center" >
                        <p>{event.note}</p>
                    </div>
                </div>
                <CapsuleList
                    capsules={event.capsules}
                    eventId={event.id}
                />
                <RadarList radars={radars} participants={event.participants} eventId={event.id}/>
                <ParticipantList participants={event.participants} eventId={event.id} />
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = ({ event, radars }) => ({ event, radars })

const mapDispatch = (dispatch, ownProps) => {
    const paramId = Number(ownProps.match.params.eventId)
    return {
        fetchEvent: () => dispatch(fetchEvent(paramId))
    }
}

export default connect(mapState, mapDispatch)(EventDetail)
