import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {EventList} from './'
import {fetchEvents} from '../store'

/**
 * COMPONENT
 */
export class UserHome extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.fetchEvents()
  }

  render(){
    const {email, events} = this.props
    console.log(events)
    return (
      <div>
        <h3>Welcome, {email}</h3>
        <EventList events={events} />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = ({ user, events }) => {
  const eventsForOne = !events ? null : events.filter(event => event.userId === user.id) 
  return {
    email: user.email,
    events: eventsForOne
  }
}

const mapDispatch = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
