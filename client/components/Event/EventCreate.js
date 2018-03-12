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
            userId: this.props.userId,
            imageUrl: 'http://secretgardenplaycafe.co.uk/wp-content/uploads/2015/12/messyhands.jpg'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    imgUrlSetup(type){
        const imgUrl = {
            play: 'http://secretgardenplaycafe.co.uk/wp-content/uploads/2015/12/messyhands.jpg',
            holiday: 'https://assets.entrepreneur.com/content/3x2/1300/1411165490-dazzle-delight-customers-holiday-season.jpg',
            special: 'https://wasabi-singapore.s3.amazonaws.com/uploads/topic_item/image/17570/retina_4c4df5ac-cf27-4f71-ab13-b5661d761b8b.jpg',
            pirate: 'https://ontarioflagandpole.com/wp-content/uploads/2017/07/Deadman-Chest-Tricorner-550.jpg'
        }
        const imageUrl = imgUrl[type]
        this.setState({ imageUrl })
    }

    render(){
        const purpose = [
            'play',
            'holiday',
            'special',
            'pirate'
        ]
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className="center" >
                        <h3>
                            Event title : 
                            <input
                                onChange={evt =>
                                    this.setState({ title: evt.target.value })
                                }
                                name="title"
                                required
                                placeholder="Event title"
                            />
                        </h3>
                    </div>
                    <div className="center" >
                        <img className="single-img" src={this.state.imageUrl} />
                    </div>
                    <div className="center" >
                        <h3>
                            Event Start Date : 
                            <input
                                onChange={evt =>
                                    this.setState({ startDate: evt.target.value })
                                }
                                name="startDate"
                                required
                                placeholder="M-D-YYYY-H"
                            />
                        </h3>
                    </div>
                    <div className="center" >
                        <h3>
                            Event End Date : 
                            <input
                                onChange={evt =>
                                    this.setState({ endDate: evt.target.value })
                                }
                                name="endDate"
                                required
                                placeholder="M-D-YYYY-H"
                            />
                        </h3>
                    </div>
                    <div className="center" >
                        <h3>
                            Event purpose : 
                            <select
                                onChange={evt => {
                                    this.setState({ purpose: evt.target.value })
                                    this.imgUrlSetup(evt.target.value)
                                }}>
                                {
                                    purpose
                                        .map(option => (
                                            <option key={option}>{option}</option>
                                        )
                                    )
                                }
                            </select>
                        </h3>
                    </div>
                    <div className="center" >
                        <h3>
                            Event note : 
                            <textarea
                                onChange={evt =>
                                    this.setState({ note: evt.target.value })
                                }
                                name="note"
                                required
                                placeholder="Give detail about this Event"
                            />
                        </h3>
                    </div>
                    <div className="center" >
                        <button>Create Event</button>
                    </div>
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
const mapState = ({ user }) => {
    const userId = user.id
    return { userId }
}

const mapDispatch = (dispatch) => ({
    addEvent: (Event) =>
        dispatch(addEvent(Event)
    )
})

export default connect(mapState, mapDispatch)(EventCreate)
