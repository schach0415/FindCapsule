'use strict'

import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_CONTENTS = 'GET_CONTENTS';
const CREATE_CONTENT = 'CREATE_CONTENT';
const UPDATE_CONTENT = 'UPDATE_CONTENT';
const DELETE_CONTENT = 'DELETE_CONTENT';

/**
 * ACTION CREATORS
 */
const getContents = contents => ({type: GET_CONTENTS, contents})
const createContent = content => ({type: CREATE_CONTENT, content})
const updateContent = content => ({type: UPDATE_CONTENT, content})
const deleteContent = id => ({type: DELETE_CONTENT, id})

/**
 * THUNK CREATORS
 */
export const fetchContents = () => dispatch =>
    axios.get('/api/contents')
        .then(res => res.data)
        .then(contents => dispatch(getContents(contents)))
        .catch(err => console.error('Fetching Contents unsuccesful.', err))

export const addContent = content => dispatch =>
    axios.post('/api/contents', content)
        .then(res => res.data)
        .then(newContent => dispatch(createContent(newContent)))
        .catch(err => console.error(`Creating Content ${content} unsuccesful.`, err))

export const editContent = (content, id) => dispatch =>
    axios.put(`/api/contents/${id}`, content)
        .then(res => res.data)
        .then(editedContent => dispatch(updateContent(editedContent)))
        .catch(err => console.error(`Updating Content ${content} unsuccesful.`, err))

export const removeContent = id => dispatch =>
    axios.delete(`/api/contents/${id}`)
        .then(() => dispatch(deleteContent(id)))
        .catch(err => console.error(`Deleting Content (id: ${id}) unsuccesful.`, err))

/**
 * Reducer
 */
export default function reducer(contents = [], action) {
  switch (action.type) {
    case GET_CONTENTS:
      return action.contents;
    case CREATE_CONTENT:
      return [...contents, action.content];
    case UPDATE_CONTENT:
      return contents.map(content => {
        return content.id === action.content.id ? action.content : content
      });
    case DELETE_CONTENT:
      return contents.filter(content => content.id !== action.content.id);
    default:
      return contents;
  }
}
