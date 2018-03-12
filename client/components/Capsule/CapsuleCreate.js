'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addCapsule } from '../../store'

/**
 * COMPONENT
 */
class CapsuleCreate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            description: '',
            activateDate: '',
            eventId: this.props.eventId,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71sNsKnu8nL._SL1500_.jpg'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className="center" >
                        <h3>
                            Capsule Name : 
                            <input
                                onChange={evt =>
                                    this.setState({ name: evt.target.value })
                                }
                                name="name"
                                required
                                placeholder="Capsule Name"
                            />
                        </h3>
                    </div>
                    <div className="center" >
                        <img className="single-img" src={this.state.imageUrl} />
                    </div>
                    <div className="center" >
                        <h3>
                            Capsule Activate Date : 
                            <input
                                onChange={evt =>
                                    this.setState({ activateDate: evt.target.value })
                                }
                                name="activateDate"
                                required
                                placeholder="M-D-YYYY"
                            />
                        </h3>
                    </div>
                    <div className="center" >
                        <h3>
                            Capsule description : 
                            <textarea
                                onChange={evt =>
                                    this.setState({ description: evt.target.value })
                                }
                                name="description"
                                required
                                placeholder="Give detail about this Capsule"
                            />
                        </h3>
                    </div>
                    <div className="center" >
                        <button>Make Capsule</button>
                    </div>
                </form>
            </div>
        )
    }

    handleSubmit(evt){
        evt.preventDefault()
        const { addCapsule } = this.props
        addCapsule(this.state)
    }
}

/**
 * CONTAINER
 */
const mapState = (state, ownProps) => {
    const eventId = !ownProps.match.params.eventId ? null : Number(ownProps.match.params.eventId)
    console.log(eventId)
    return { eventId }
}

const mapDispatch = (dispatch) => ({
    addCapsule: (capsule) =>
        dispatch(addCapsule(capsule)
    )
})

export default connect(mapState, mapDispatch)(CapsuleCreate)
