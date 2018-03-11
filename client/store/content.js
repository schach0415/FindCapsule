'use strict'

import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_CONTENT = 'GET_CONTENT';

/**
 * ACTION CREATORS
 */
const getContent = content => ({ type: GET_CONTENT, content})

/**
 * THUNK CREATORS
 */
export const fetchContent = id => dispatch =>
  axios.get(`/api/contents/${id}`)
    .then(res => res.data)
    .then(content => dispatch(getContent(content)))
    .catch(err => console.error(`Fetching Content ${id} unsuccesful.`, err))

/**
 * Reducer
 */
export default function reducer(content = {}, action) {
    switch (action.type) {
        case GET_CONTENT:
            return action.content;
    default:
        return content;
    }
}
