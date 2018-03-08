'use strict'

import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_EVENT = 'GET_EVENT';

/**
 * ACTION CREATORS
 */
const getEvent = event => ({ type: GET_EVENT, event})

/**
 * THUNK CREATORS
 */
export const fetchEvent = id => dispatch =>
  axios.get(`/api/events/${id}`)
    .then(res => res.data)
    .then(event => dispatch(getEvent(event)))
    .catch(err => console.error(`Fetching Event ${id} unsuccesful.`, err))

/**
 * Reducer
 */
export default function reducer(event = {}, action) {
    switch (action.type) {
        case GET_EVENT:
            return action.event;
    default:
        return event;
    }
}
