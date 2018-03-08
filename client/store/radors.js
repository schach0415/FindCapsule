'use strict'

import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_RADORS = 'GET_RADORS';
const CREATE_RADOR = 'CREATE_RADOR';
const UPDATE_RADOR = 'UPDATE_RADOR';
const DELETE_RADOR = 'DELETE_RADOR';

/**
 * ACTION CREATORS
 */
const getRadors = radors => ({type: GET_RADORS, radors})
const createRador = rador => ({type: CREATE_RADOR, rador})
const updateRador = rador => ({type: UPDATE_RADOR, rador})
const deleteRador = id => ({type: DELETE_RADOR, id})

/**
 * THUNK CREATORS
 */
export const fetchRadors = () => dispatch =>
    axios.get('/api/radors')
        .then(res => res.data)
        .then(radors => dispatch(getRadors(radors)))
        .catch(err => console.error('Fetching Radors unsuccesful.', err))

export const addRador = rador => dispatch =>
    axios.post('/api/radors', rador)
        .then(res => res.data)
        .then(newRador => dispatch(createRador(newRador)))
        .catch(err => console.error(`Creating Rador ${rador} unsuccesful.`, err))

export const editRador = (rador, id) => dispatch =>
    axios.put(`/api/radors/${id}`, rador)
        .then(res => res.data)
        .then(editedRador => dispatch(updateRador(editedRador)))
        .catch(err => console.error(`Updating Rador ${rador} unsuccesful.`, err))

export const removeRador = id => dispatch =>
    axios.delete(`/api/radors/${id}`)
        .then(() => dispatch(deleteRador(id)))
        .catch(err => console.error(`Deleting Rador (id: ${id}) unsuccesful.`, err))

export default function reducer(radors = [], action) {
  switch (action.type) {
    case GET_RADORS:
      return action.radors;
    case CREATE_RADOR:
      return [...radors, action.rador];
    case UPDATE_RADOR:
      return radors.map(rador => {
        return rador.id === action.rador.id ? action.rador : rador
      });
    case DELETE_RADOR:
      return radors.filter(rador => rador.id !== action.rador.id);
    default:
      return radors;
  }
}
