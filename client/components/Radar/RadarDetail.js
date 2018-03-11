'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
class RadarDetail extends React.Component {
    render(){
        const radar = this.props && this.props.radar
        return (
            <div>
                <h3>
                    Radar Name : {radar.name}
                </h3>
                <h3>
                    <img src={radar.imageUrl} />
                </h3>
                <h3>
                    Radar Accuracy : {radar.accuracy} feet radius
                </h3>
                <h3>
                    Radar Sound : <img src={radar.soundUrl}/>
                </h3>
                <h3>
                    Radar description : {radar.description}
                </h3>
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapState = null

export default connect(mapState)(RadarDetail)
