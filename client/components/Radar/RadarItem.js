'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
class RadarItem extends React.Component {
    render(){
        const radar = this.props.radar
        return (
            <div>
                <Link to={`/radars/${radar.id}`}>
                    <img src={radar.imageUrl} />
                    <h4>{radar.name}</h4>
                </Link>
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = null

export default connect(mapState)(RadarItem)
