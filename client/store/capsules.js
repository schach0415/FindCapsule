'use strict'

import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_CAPSULES = 'GET_CAPSULES';
const CREATE_CAPSULE = 'CREATE_CAPSULE';
const UPDATE_CAPSULE = 'UPDATE_CAPSULE';
const DELETE_CAPSULE = 'DELETE_CAPSULE';

/**
 * ACTION CREATORS
 */
const getCapsules = capsules => ({type: GET_CAPSULES, capsules})
const createCapsule = capsule => ({type: CREATE_CAPSULE, capsule})
const updateCapsule = capsule => ({type: UPDATE_CAPSULE, capsule})
const deleteCapsule = id => ({type: DELETE_CAPSULE, id})

/**
 * THUNK CREATORS
 */
export const fetchCapsules = () => dispatch =>
    axios.get('/api/capsules')
        .then(res => res.data)
        .then(capsules => dispatch(getCapsules(capsules)))
        .catch(err => console.error('Fetching Capsules unsuccesful.', err))

export const addCapsule = capsule => dispatch =>
    axios.post('/api/capsules', capsule)
        .then(res => res.data)
        .then(newCapsule => dispatch(createCapsule(newCapsule)))
        .catch(err => console.error(`Creating Capsule ${capsule} unsuccesful.`, err))

export const editCapsule = (capsule, id) => dispatch =>
    axios.put(`/api/capsules/${id}`, capsule)
        .then(res => res.data)
        .then(editedCapsule => dispatch(updateCapsule(editedCapsule)))
        .catch(err => console.error(`Updating Capsule ${capsule} unsuccesful.`, err))

export const removeCapsule = id => dispatch =>
    axios.delete(`/api/capsules/${id}`)
        .then(() => dispatch(deleteCapsule(id)))
        .catch(err => console.error(`Deleting Capsule (id: ${id}) unsuccesful.`, err))
/**
 * Reducer
 */
export default function reducer(capsules = [], action) {
  switch (action.type) {
    case GET_CAPSULES:
      return action.capsules;
    case CREATE_CAPSULE:
      return [...capsules, action.capsule];
    case UPDATE_CAPSULE:
      return capsules.map(capsule => {
        return capsule.id === action.capsule.id ? action.capsule : capsule
      });
    case DELETE_CAPSULE:
      return capsules.filter(capsule => capsule.id !== action.capsule.id);
    default:
      return capsules;
  }
}
