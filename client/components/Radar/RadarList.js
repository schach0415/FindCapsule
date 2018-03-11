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
        const radars = this.props.radars
        return (
            <div>
                <div>
                    <h2>Radars</h2>
                </div>
                <div>
                    {
                        radars
                            .map(radar => (
                                <RadarItem
                                    key={radar.id}
                                    radar={radar}
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
