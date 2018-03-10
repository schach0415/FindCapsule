'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
class RadarList extends React.Component {
    constructor(props){
        super(props)
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
        return (
            <div>
                <div>
                    <h2>Radars</h2>
                </div>
                <div>
                    {
                        Radars
                            .map(radar => (
                                <div key={radar.id}>
                                    <div>
                                        <img src={radar.imageUrl}/>
                                        <h4>{radar.name}</h4>
                                    </div>
                                </div>
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
const mapState = null

export default connect(mapState)(RadarList)
