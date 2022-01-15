import { csrfFetch } from "./csrf"

const LOAD_COMMENTS = "comments/LOAD_COMMENTS"
const ADD_COMMENT = "comments/ADD_COMMENT"
const DELETE_COMMENT = "comments/DELETE_COMMENT"

/* ----- ACTIONS ------ */

const load_comments = (comments) => {
  return {
    type: LOAD_COMMENTS,
    comments
  }
}

const add_comment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  }
}

const delete_comment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    commentId
  }
}

/* ------ THUNK ACTIONS ------ */

export const getAllComments = () => async(dispatch) => {
  const response = await csrfFetch('/api/comments');

  if (response.ok) {
    const data = await response.json();
    dispatch(load_comments(data.comments))
    return data.comments;
  }
}

export const addComment = ({ userId, photoId, content}) => async(dispatch) => {
  const response = await csrfFetch('/api/comments', {
    method: "POST",
    body: JSON.stringify({
      userId,
      photoId,
      content
    })
  })

  if (response.ok) {
    const comment = await response.json()
    dispatch(add_comment(comment))
    return comment;
  }
}

export const deleteCommmentById = (commentId) => async(dispatch) => {
  const response = await csrfFetch(`/api/comments/${commentId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      commentId
    })
  })

  if (response.ok) {
    const commentToDelete = await response.json()
    dispatch(delete_comment(commentToDelete))
    return "Delete successful"
  }
}

/* ------ REDUCER ------ */

export default function commentReducer(state = {}, action) {
  let allComments = {};
  switch (action.type) {
    case LOAD_COMMENTS:
      action.comments.forEach((comment) => {
        allComments[comment.id] = comment
      })
      return allComments;

    case ADD_COMMENT:
      allComments = {...state}
      allComments[action.comment.id] = action.comment;
      return allComments;

    case DELETE_COMMENT:
      allComments = {...state}
      delete allComments[action.commentId]
      return allComments;

    default:
      return state;
  }
}
