'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { RadarItem } from '../'

/**
 * COMPONENT
 */
class RadarList extends React.Component {
    constructor(props){
        super(props)
        this.renderWithRadar = this.renderWithRadar.bind(this)
    }

    render(){
        const radars = this.props.radars
        return (
            <div>
                {
                    !radars ?
                    null : this.renderWithRadar()
                }
            </div>
        )
    }

    renderWithRadar(){
        const { radars, participants, eventId } = this.props
        if(!participants) return null
        return (
            <div>
                <div className="center" >
                    <h2>Radars</h2>
                </div>
                <div className="list-view" >
                    {
                        radars
                            .map(radar => (
                                <RadarItem
                                    key={radar.id}
                                    radar={radar}
                                    eventId={eventId}
                                    participants={
                                        participants
                                            .filter(player => player.radarId === radar.id)
                                    }
                                />
                            )
                        )
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

export default connect(mapState)(RadarList)
