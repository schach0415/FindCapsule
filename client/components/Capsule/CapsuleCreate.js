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
                    <h3>
                        Capsule Name : 
                        <input
                            onChange={capsule =>
                                this.setState({ name: capsule.target.value })
                            }
                            name="name"
                            required
                            placeholder="Capsule Name"
                        />
                    </h3>
                    <h3>
                        <img src={this.state.imageUrl} />
                    </h3>
                    <h3>
                        Capsule Activate Date : 
                        <input
                            onChange={capsule =>
                                this.setState({ activateDate: capsule.target.value })
                            }
                            name="activateDate"
                            required
                            placeholder="M-D-YYYY"
                        />
                    </h3>
                    <h3>
                        Capsule description : 
                        <textarea
                            onChange={capsule =>
                                this.setState({ description: capsule.target.value })
                            }
                            name="description"
                            required
                            placeholder="Give detail about this Capsule"
                        />
                    </h3>
                    {/* <div>
                        <div>
                            <h3>Location</h3>
                            <button>Clear All Capsule</button>
                        </div>
                        <div>
                            <div>Map</div>
                            <div>
                                <form>
                                    <div>
                                        <h4>Ramdom Locator</h4>
                                        <input
                                            placeholder="Ramdom Quentity"
                                        />
                                        <button>Locate Capsule</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> */}
                    <button>Make Capsule</button>
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
    const eventId = Number(ownProps.match.params.eventId)
    return { eventId }
}

const mapDispatch = (dispatch) => ({
    addCapsule: (capsule) =>
        dispatch(addCapsule(capsule)
    )
})

export default connect(mapState, mapDispatch)(CapsuleCreate)
