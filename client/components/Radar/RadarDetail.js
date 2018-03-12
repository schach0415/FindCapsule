'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
class RadarDetail extends React.Component {
    render(){
        const { radar, eventId } = this.props
        if(!radar) return null
        return (
            <div>
                <div className="center" >
                    <h3>Radar Name : {radar.name}</h3>
                    {
                        !eventId ? null :
                        (
                            <Link to={`/events/${eventId}`}>
                                <button>Back to Event</button>
                            </Link>
                        )
                    }
                </div>
                <div className="center" >
                    <img src={radar.imageUrl} />
                </div>
                <div className="center" >
                    <h3>Radar Accuracy : {radar.accuracy} feet radius</h3>
                </div>
                <div className="center" >
                    <h3>Radar Sound : <a href={radar.soundUrl}/></h3>
                </div>
                <div className="center" >
                    <h3>Radar description : {radar.description}</h3>
                </div>
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = ({ radars }, ownProps) => {
    if(!ownProps.match) return null
    const paramId = Number(ownProps.match.params.radarId)
    const eventId = Number(ownProps.match.params.eventId)
    const radar = !radars ? null : radars.find(radar => radar.id === paramId)
    return { radar, eventId }
}

export default connect(mapState)(RadarDetail)
