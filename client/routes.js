import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import { Login, Signup, UserHome, Main, EventDetail, EventCreate, ParticipantCreate, CapsuleCreate, CapsuleDetail, ContentCreate, ContentDetail, RadarDetail } from './components'
import {me, fetchRadars} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {
          isLoggedIn &&
            <Switch>
              {/* Routes placed here are only available after logging in */}
              <Route path="/home" component={UserHome} />
              <Route exact path="/event-create" component={EventCreate} />
              <Route exact path="/events/:eventId" component={EventDetail} />
              <Route exact path="/events/:eventId/capsule-create" component={CapsuleCreate} />
              <Route exact path="/events/:eventId/participant-create" component={ParticipantCreate} />
              <Route exact path="/capsules/:capsuleId" component={CapsuleDetail} />
              <Route exact path="/capsules/:capsuleId/content-create" component={ContentCreate} />
              <Route exact path="/contents/:contentId" component={ContentDetail} />
              <Route exact path="/events/:eventId/radars/:radarId" component={RadarDetail} />

              {/* <Route exact path="/radar-create" component={RadarCreate} /> */}
              {/* <Route exact path="/events/:eventId/event-edit" component={EventEdit} /> */}
            </Switch>
        }
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(fetchRadars())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
