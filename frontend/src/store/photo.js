import { csrfFetch } from './csrf'

const LOAD_PHOTOS = "photos/LOAD";
const ADD_PHOTO = "photos/ADD_PHOTO";
const UPDATE_PHOTO = "photos/UPDATE_PHOTO";
const DELETE_PHOTO = "photos/DELETE_PHOTO";

/* ----- ACTIONS ------ */

const loadPhotos = (photos) => {
  return {
    type: LOAD_PHOTOS,
    photos
  }
}

const addPhoto = (photo) => {
  return {
    type: ADD_PHOTO,
    photo
  }
}

const updatePhoto = (photo) => {
  return {
    type: UPDATE_PHOTO,
    photo
  }
}

const deletePhoto = (photoId) => {
  return {
    type: DELETE_PHOTO,
    photoId
  }
}
  
/* ------ THUNK ACTIONS ------ */
export const getAllPhotos = () => async (dispatch) => {
  const response = await csrfFetch('/api/photos');

  if (response.ok) {
    const data = await response.json();
    dispatch(loadPhotos(data.photos))
    return data.photos;
  }
}

export const uploadPhoto = ({ userId, photoUrl, caption, isPublic }) => async (dispatch) => {
  const response = await csrfFetch('/api/photos', {
    method: "POST",
    body: JSON.stringify({
      userId,
      photoUrl,
      caption,
      isPublic
    })
  });

  if (response.ok) {
    const photo = await response.json();
    dispatch(addPhoto(photo))
    return photo;
  }
}

export const updatePhotoById = ({ photoId, caption, isPublic }) => async (dispatch) => {
  const response = await csrfFetch(`/api/photos/${photoId}`, {
    method: 'PUT',
    body: JSON.stringify({
      photoId,
      caption,
      isPublic
    })
  })

  if (response.ok) {
    const updatedPhoto = await response.json();
    dispatch(updatePhoto(updatedPhoto));
    return updatedPhoto;
  }
}

export const deletePhotoById = (photoId) => async (dispatch) => {
  const response = await csrfFetch(`/api/photos/${photoId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      photoId
    })
  })
  
  if (response.ok) {
    const photoToDelete = await response.json();
    dispatch(deletePhoto(photoToDelete))
    return "Delete successful"
  }
}

/* ------ REDUCER ------ */

export default function photoReducer(state = {}, action) {
  let allPhotos = {};
  switch (action.type) {
    case LOAD_PHOTOS:
      action.photos.forEach((photo) => {
        allPhotos[photo.id] = photo
      })
      allPhotos = {...state, ...allPhotos}
      return allPhotos;

    case ADD_PHOTO:
      allPhotos = {...state}
      allPhotos[action.photo.id] = action.photo;
      return allPhotos;

    case UPDATE_PHOTO:
      allPhotos = {...state}
      allPhotos[action.photo.id] = action.photo;
      return allPhotos;

    case DELETE_PHOTO:
      allPhotos = {...state}
      delete allPhotos[action.photoId]
      return allPhotos;

    default:
      return state;
  }
}