import { csrfFetch } from "./csrf"

const LOAD_LIKES = "likes/LOAD_LIKES"
const ADD_LIKE = "likes/ADD_LIKE"
const REMOVE_LIKE = "likes/REMOVE_LIKE"

/* ----- ACTIONS ------ */

const load_likes = (likes) => {
  return {
    type: LOAD_LIKES,
    likes
  }
}

const add_like = (like) => {
  return {
    type: ADD_LIKE,
    like
  }
}

const remove_like = (likeId) => {
  return {
    type: REMOVE_LIKE,
    likeId
  }
}

/* ------ THUNK ACTIONS ------ */

export const getAllLikes = () => async(dispatch) => {
  const response = await csrfFetch('/api/likes');

  if (response.ok) {
    const data = await response.json()
    dispatch(load_likes(data.likes))
    return data.likes
  }
}

export const addLike = ({ userId, photoId }) => async(dispatch) => {
  const response = await csrfFetch('/api/likes', {
    method: "POST",
    body: JSON.stringify({
      userId,
      photoId
    })
  })

  if (response.ok) {
    const like = await response.json()
    dispatch(add_like(like))
    return like
  }
}

export const removeLikeById = (likeId) => async(dispatch) => {
  const response = await csrfFetch(`/api/likes/${likeId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      likeId
    })
  })

  if (response.ok) {
    const likeToDelete = await response.json();
    dispatch(remove_like(likeToDelete))
    return "Remove successful"
  }
}

/* ------ REDUCER ------ */

export default function likeReducer(state = {}, action) {
  let allLikes = {}
  switch (action.type) {
    case LOAD_LIKES:
      action.likes.forEach((like) => {
        allLikes[like.id] = like 
      })
    return allLikes;

    case ADD_LIKE:
      allLikes = {...state}
      allLikes[action.like.id] = action.like;
      return allLikes;
    
    case REMOVE_LIKE:
      allLikes = {...state}
      delete allLikes[action.likeId]
      return allLikes;

    default:
      return state;
  }  
}