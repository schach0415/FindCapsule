'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addRadar } from '../../store'

/**
 * COMPONENT
 */
class RadarCreate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            description: 'Radar is an object-detection system that uses radio waves to determine the range, angle, or velocity of objects. It can be used to detect aircraft, ships, spacecraft, guided missiles, motor vehicles, weather formations, and terrain. However, this radar is only design for detecting CAPSULES',
            name: 'gold',
            accuracy: 25,
            soundUrl: 'http://soundbible.com/mp3/Radar%20Detector%20Beeps-SoundBible.com-892148482.mp3',
            imageUrl: 'http://www.conquistanews.com.br/wp-content/uploads/2013/04/radar_gif-animado-3749582.gif'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.basicSetup = this.basicSetup.bind(this)
    }

    render(){
        const name = [
            'gold',
            'silver',
            'bronze',
            'diamond',
        ]
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h3>
                        Radar Name : 
                        <select
                            onChange={evt => {
                                this.setState({ startDate: evt.target.value })
                                this.basicSetup(evt.target.value)
                            }}>
                            {
                                name
                                    .map(option => (
                                        <option key={option}>{option}</option>
                                    )
                                )
                            }
                        </select>
                        <button>Choose Radar</button>
                    </h3>
                    <h3>
                        <img src={this.state.imageUrl} />
                    </h3>
                    <h3>
                        Radar Accuracy : {this.state.accuracy} feet radius
                    </h3>
                    <h3>
                        Radar Sound : <img src={this.state.soundUrl}/>
                    </h3>
                    <h3>
                        Radar description : {this.state.description}
                    </h3>
                </form>
            </div>
        )
    }

    handleSubmit(Radar){
        Radar.prRadarDefault()
        const { addRadar } = this.props
        addRadar(this.state)
    }

    basicSetup(type){
        const basic = {
            diamond: 10,
            gold: 25,
            silver: 50,
            bronze: 75,
        }
        const accuracy = basic[type]
        this.setState({ accuracy })
    }
}

/**
 * CONTAINER
 */
const mapState = null

const mapDispatch = (dispatch) => ({
    addRadar: (Radar) =>
        dispatch(addRadar(Radar)
    )
})

export default connect(mapState, mapDispatch)(RadarCreate)
