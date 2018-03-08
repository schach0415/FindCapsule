'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchEvent } from '../../store'

/**
 * COMPONENT
 */
class EventDetail extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchEvent()
    }

    render(){
        return (

        )
    }
}

/**
 * CONTAINER
 */
const mapState = ({ event }) => {
    return {
        event
    }
}

const mapDispatch = (dispatch, ownProps) => {
    const paramId = ownProps.match.params.eventId
    return {
        fetchEvent: () => dispatch(fetchEvent(paramId))
    }
}

export default connect(mapState, mapDispatch)(EventDetail)
