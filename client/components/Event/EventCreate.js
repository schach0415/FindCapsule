'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addEvent } from '../../store'

/**
 * COMPONENT
 */
class EventCreate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            note: '',
            purpose: 'play',
            startDate: '',
            endDate: '',
            imageUrl: 'http://secretgardenplaycafe.co.uk/wp-content/uploads/2015/12/messyhands.jpg'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render(){
        const purpose = [
            'holiday',
            'special',
            'pirate',
            'play'
        ]
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h3>
                        Event title : 
                        <input
                            onChange={event =>
                                this.setState({ title: event.target.value })
                            }
                            name="title"
                            required
                            placeholder="Event title"
                        />
                    </h3>
                    <h3>
                        <img src={this.state.imageUrl} />
                    </h3>
                    <h3>
                        Event Start Date : 
                        <input
                            onChange={event =>
                                this.setState({ startDate: event.target.value })
                            }
                            name="startDate"
                            required
                            placeholder="Starting Date"
                        />
                    </h3>
                    <h3>
                        Event End Date : 
                        <input
                            onChange={event =>
                                this.setState({ endDate: event.target.value })
                            }
                            name="endDate"
                            required
                            placeholder="End Date"
                        />
                    </h3>
                    <h3>
                        Event purpose : 
                        <select
                            onChange={event =>
                                this.setState({ purpose: event.target.value })
                            }>
                            {
                                purpose
                                    .map(option => (
                                        <option key={option}>{option}</option>
                                    )
                                )
                            }
                        </select>
                    </h3>
                    <h3>
                        Event note : 
                        <textarea
                            onChange={event =>
                                this.setState({ note: event.target.value })
                            }
                            name="note"
                            required
                            placeholder="Give detail about this Event"
                        />
                    </h3>
                    <button>Create Event</button>
                </form>
            </div>
        )
    }

    handleSubmit(event){
        event.preventDefault()
        const { addEvent } = this.props
        addEvent(this.state)
    }
}

/**
 * CONTAINER
 */
const mapState = null

const mapDispatch = (dispatch) => ({
    addEvent: (Event) =>
        dispatch(addEvent(Event)
    )
})

export default connect(mapState, mapDispatch)(EventCreate)
