'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeCapsule } from '../../store'

/**
 * COMPONENT
 */
class CapsuleItem extends React.Component {
    constructor(props){
        super(props)
        this.removeCapsuleCallback = this.removeCapsuleCallback.bind(this)
    }

    render(){
        const capsule = this.props.capsule
        return (
            <div>
                <Link to={`/capsules/${capsule.id}`}>
                <img src={capsule.imageUrl} />
                    <h3>{capsule.name}</h3>
                    <p>{capsule.quentity}</p>
                </Link>
                <button onClick={this.removeCapsuleCallback} >Delete</button>
            </div>
        )
    }

    removeCapsuleCallback(evt){
        evt.preventDefault()
        const { removeCapsule, capsule } = this.props
        removeCapsule(capsule.id)
    }
}

/**
 * CONTAINER
 */
const mapState = null

const mapDispatch = dispatch => ({
    removeCapsule: capsuleId => dispatch(removeCapsule(capsuleId))
})

export default connect(mapState, mapDispatch)(CapsuleItem)
