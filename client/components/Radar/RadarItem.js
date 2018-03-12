'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
class RadarItem extends React.Component {
    render(){
        const { radar, participants } = this.props
        return (
            <div>
                <Link to={`/radars/${radar.id}`}>
                    <img src={radar.imageUrl} />
                    <h4>{radar.name}</h4>
                    <p>{participants.length} hunters</p>
                </Link>
                    {
                        !participants[0] ? null :
                        <select>
                            {
                                participants
                                    .map(participant => (
                                        <option key={participant.id} >
                                            {participant.email}
                                        </option>     
                                ))
                            }
                        </select>
                    }
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = null

export default connect(mapState)(RadarItem)
