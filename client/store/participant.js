'use strict'

import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PARTICIPANTS = 'GET_PARTICIPANTS'
const CREATE_PARTICIPANT = 'CREATE_PARTICIPANT'
const UPDATE_PARTICIPANT = 'UPDATE_PARTICIPANT'
const DELETE_PARTICIPANT = 'DELETE_PARTICIPANT'

/**
 * ACTION CREATORS
 */
const getParticipants = participants => ({type: GET_PARTICIPANTS, participants})
const createParticipant = participant => ({type: CREATE_PARTICIPANT, participant})
const updateParticipant = participant => ({type: UPDATE_PARTICIPANT, participant})
const deleteParticipant = id => ({type: DELETE_PARTICIPANT, id})

/**
 * THUNK CREATORS
 */
export const fetchParticipants = () => dispatch =>
    axios.get('/api/participants')
        .then(res => res.data)
        .then(participants => dispatch(getParticipants(participants)))
        .catch(err => console.error('Fetching Participants unsuccesful.', err))

export const addParticipant = participant => dispatch =>
    axios.post('/api/participants', participant)
        .then(res => res.data)
        .then(newParticipant => dispatch(createParticipant(newParticipant)))
        .catch(err => console.error(`Creating Participant ${participant} unsuccesful.`, err))

export const editParticipant = (participant, id) => dispatch =>
    axios.put(`/api/participants/${id}`, participant)
        .then(res => res.data)
        .then(editedParticipant => dispatch(updateParticipant(editedParticipant)))
        .catch(err => console.error(`Updating Participant ${participant} unsuccesful.`, err))

export const removeParticipant = id => dispatch =>
    axios.delete(`/api/participants/${id}`)
        .then(() => dispatch(deleteParticipant(id)))
        .catch(err => console.error(`Deleting Participant (id: ${id}) unsuccesful.`, err))

 /**
 * Reducer
 */
export default function reducer(participants = [], action) {
  switch (action.type) {
    case GET_PARTICIPANTS:
      return action.participants;
    case CREATE_PARTICIPANT:
      return [...participants, action.participant];
    case UPDATE_PARTICIPANT:
      return participants.map(participant => {
        return participant.id === action.participant.id ? action.participant : participant
      });
    case DELETE_PARTICIPANT:
      return participants.filter(participant => participant.id !== action.participant.id);
    default:
      return participants;
  }
}
