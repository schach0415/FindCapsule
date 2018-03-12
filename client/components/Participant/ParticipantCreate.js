'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addParticipant } from '../../store'
import { RadarDetail } from '../'

/**
 * COMPONENT
 */
class ParticipantCreate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: [],
            eventId: +this.props.eventId,
            radarId: 1,
            Invitation: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render(){
        const radars = this.props.radars
        return (
            <div>
                <div className="center" >
                <select onChange={evt => {
                    const radar = radars.find(radar => radar.name === evt.target.value)
                    this.setState({ radarId: radar.id})
                }} >
                    {
                        radars.map(radar => (
                            <option key={radar.id} name={radar.id}>
                                {radar.name}
                            </option>
                            )
                        )
                    }
                </select>
                </div>
                <RadarDetail
                    radar={radars.find(radar => radar.id === this.state.radarId)}
                />
                <form onSubmit={this.handleSubmit} >
                    <div className="center" >
                        <h3>
                            Participant Email Addresses : 
                            <input
                                onChange={evt => {
                                    this.setState({ email: evt.target.value.split(',') })
                                    }
                                }
                                name="email"
                                required
                                placeholder="Email Addresses seperate by ','."
                            />
                        </h3>
                    </div>
                    <div className="center" >
                        <h3>
                            Invitation : 
                            <textarea
                                onChange={evt =>
                                    this.setState({ Invitation: evt.target.value })
                                }
                                name="invitation"
                                required
                                placeholder="Give detail about this invitation to Participant"
                            />
                        </h3>
                    </div>
                    <div className="center" >
                        <button>Send Invitation</button>
                    </div>
                </form>
            </div>
        )
    }

    handleSubmit(evt){
        evt.preventDefault()
        const { addParticipant, history } = this.props
        const { email, eventId, radarId } = this.state
        email.forEach(messEmail => {
            const email = messEmail.trim()
            const invitee = { email, eventId, radarId }
            addParticipant(invitee)
        })
        history.push(`/events/${eventId}`)
    }
}

/**
 * CONTAINER
 */
const mapState = ({ radars }, ownProps) => {
    const eventId = ownProps.match.params.eventId
    return { radars, eventId }
}

const mapDispatch = (dispatch) => ({
    addParticipant: (participant) =>
        dispatch(addParticipant(participant)
    )
})

export default connect(mapState, mapDispatch)(ParticipantCreate)
