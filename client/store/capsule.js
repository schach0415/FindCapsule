'use strict'

import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_CAPSULE = 'GET_CAPSULE';

/**
 * ACTION CREATORS
 */
const getCapsule = capsule => ({ type: GET_CAPSULE, capsule})

/**
 * THUNK CREATORS
 */
export const fetchCapsule = id => dispatch =>
  axios.get(`/api/capsules/${id}`)
    .then(res => res.data)
    .then(capsule => dispatch(getCapsule(capsule)))
    .catch(err => console.error(`Fetching Capsule ${id} unsuccesful.`, err))

/**
 * Reducer
 */
export default function reducer(capsule = {}, action) {
    switch (action.type) {
        case GET_CAPSULE:
            return action.capsule;
    default:
        return capsule;
    }
}
