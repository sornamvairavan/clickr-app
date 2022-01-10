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

// const updatePhoto = (photo) => {
//   return {
//     type: UPDATE_PHOTO,
//     photo
//   }
// }

// const deletePhoto = (photoId) => {
//   type: DELETE_PHOTO,
//   photoId
// }
  
/* ------ THUNK ACTIONS ------ */
export const getAllPhotos = () => async (dispatch) => {
  const response = await fetch('api/photos');

  if (response.ok) {
    const data = await response.json();
    dispatch(loadPhotos(data.photos))
    return data.photos;
  }
}

export const uploadPhoto = ({ userId, photoUrl, caption, isPublic }) => async (dispatch) => {
  const response = await csrfFetch('api/photos', {
    method: "POST",
    body: JSON.stringify({
      userId,
      photoUrl,
      caption,
      isPublic
    })
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addPhoto(data.photo))
    return data.photo;
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
    default:
      return state;
  }
}