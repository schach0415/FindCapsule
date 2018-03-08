'use strict'

import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_EVENTS = 'GET_EVENTS';
const CREATE_EVENT = 'CREATE_EVENT';
const UPDATE_EVENT = 'UPDATE_EVENT';
const DELETE_EVENT = 'DELETE_EVENT';

/**
 * ACTION CREATORS
 */
const getEvents = events => ({type: GET_EVENTS, events})
const createEvent = event => ({type: CREATE_EVENT, event})
const updateEvent = event => ({type: UPDATE_EVENT, event})
const deleteEvent = id => ({type: DELETE_EVENT, id})

/**
 * THUNK CREATORS
 */
export const fetchEvents = () => dispatch =>
    axios.get('/api/events')
        .then(res => res.data)
        .then(events => dispatch(getEvents(events)))
        .catch(err => console.error('Fetching Events unsuccesful.', err))

export const addEvent = event => dispatch =>
    axios.post('/api/events', event)
        .then(res => res.data)
        .then(newEvent => dispatch(createEvent(newEvent)))
        .catch(err => console.error(`Creating Event ${event} unsuccesful.`, err))

export const editEvent = (event, id) => dispatch =>
    axios.put(`/api/events/${id}`, event)
        .then(res => res.data)
        .then(editedEvent => dispatch(updateEvent(editedEvent)))
        .catch(err => console.error(`Updating Event ${event} unsuccesful.`, err))

export const removeEvent = id => dispatch =>
    axios.delete(`/api/events/${id}`)
        .then(() => dispatch(deleteEvent(id)))
        .catch(err => console.error(`Deleting Event (id: ${id}) unsuccesful.`, err))

export default function reducer(events = [], action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.events;
    case CREATE_EVENT:
      return [...events, action.event];
    case UPDATE_EVENT:
      return events.map(event => {
        return Event.id === action.event.id ? action.event : event
      });
    case DELETE_EVENT:
      return events.filter(event => event.id !== action.event.id);
    default:
      return events;
  }
}
