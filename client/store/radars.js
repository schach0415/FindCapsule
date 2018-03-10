'use strict'

import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_RADARS = 'GET_RADARS';
const CREATE_RADAR = 'CREATE_RADAR';
const UPDATE_RADAR = 'UPDATE_RADAR';
const DELETE_RADAR = 'DELETE_RADAR';

/**
 * ACTION CREATORS
 */
const getRadars = radars => ({type: GET_RADARS, radars})
const createRadar = radar => ({type: CREATE_RADAR, radar})
const updateRadar = radar => ({type: UPDATE_RADAR, radar})
const deleteRadar = id => ({type: DELETE_RADAR, id})

/**
 * THUNK CREATORS
 */
export const fetchRadars = () => dispatch =>
    axios.get('/api/radars')
        .then(res => res.data)
        .then(radars => dispatch(getRadars(radars)))
        .catch(err => console.error('Fetching Radars unsuccesful.', err))

export const addRadar = radar => dispatch =>
    axios.post('/api/radars', radar)
        .then(res => res.data)
        .then(newRadar => dispatch(createRadar(newRadar)))
        .catch(err => console.error(`Creating Radar ${radar} unsuccesful.`, err))

export const editRadar = (radar, id) => dispatch =>
    axios.put(`/api/radars/${id}`, radar)
        .then(res => res.data)
        .then(editedRadar => dispatch(updateRadar(editedRadar)))
        .catch(err => console.error(`Updating Radar ${radar} unsuccesful.`, err))

export const removeRadar = id => dispatch =>
    axios.delete(`/api/radars/${id}`)
        .then(() => dispatch(deleteRadar(id)))
        .catch(err => console.error(`Deleting Radar (id: ${id}) unsuccesful.`, err))

/**
 * Reducer
 */
export default function reducer(radars = [], action) {
  switch (action.type) {
    case GET_RADARS:
      return action.radars;
    case CREATE_RADAR:
      return [...radars, action.radar];
    case UPDATE_RADAR:
      return radars.map(radar => {
        return radar.id === action.radar.id ? action.radar : radar
      });
    case DELETE_RADAR:
      return radars.filter(radar => radar.id !== action.radar.id);
    default:
      return radars;
  }
}
