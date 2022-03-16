import { csrfFetch } from './csrf'

const LOAD_USER_PHOTOS = "photos/LOAD_USER_PHOTOS";
const LOAD_PUBLIC_PHOTOS = "photos/LOAD_PUBLIC_PHOTOS";
// const GET_PHOTO = "photos/GET_PHOTO"
const ADD_PHOTO = "photos/ADD_PHOTO";
const UPDATE_PHOTO = "photos/UPDATE_PHOTO";
const DELETE_PHOTO = "photos/DELETE_PHOTO";

/* ----- ACTIONS ------ */

const loadUserPhotos = (photos) => {
  return {
    type: LOAD_USER_PHOTOS,
    photos
  }
}

const loadPublicPhotos = (photos) => {
  return {
    type: LOAD_PUBLIC_PHOTOS,
    photos
  }
}

// const getPhotoById = (photo) => {
//   return {
//     type: GET_PHOTO,
//     photo
//   }
// }

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
export const getUserPhotos = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/photos/user/${userId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadUserPhotos(data.photos))
    return data.photos;
  }
}

export const getPublicPhotos = () => async (dispatch) => {
  const response = await csrfFetch('/api/photos/public');

  if (response.ok) {
    const data = await response.json();
    dispatch(loadPublicPhotos(data.photos))
    return data.photos;
  }
}

// export const getSinglePhoto = (photoId) => async (dispatch) => {
//   const response = await csrfFetch(`/api/photos/${photoId}`);

//   if (response.ok) {
//     const data = await response.json();
//     dispatch(getPhotoById(data.photo))
//     return data.photo;
//   }
// }


export const uploadPhoto = ({ userId, image, caption, isPublic }) => async (dispatch) => {
  const formData = new FormData();
  formData.append("userId", userId);
  formData.append("image", image);
  if (caption) formData.append("caption", caption);
  formData.append("isPublic", isPublic);


  const response = await csrfFetch('/api/photos', {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData
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
  let publicPhotos = {}
  switch (action.type) {
    case LOAD_USER_PHOTOS:
      action.photos.forEach((photo) => {
        allPhotos[photo.id] = photo
      })
      return {...state, allPhotos};
      
    case LOAD_PUBLIC_PHOTOS:
        action.photos.forEach((photo) => {
          publicPhotos[photo.id] = photo
        })
        return {...state, publicPhotos};
    
    // case GET_PHOTO:
    //   allPhotos = {...state}
    //   allPhotos[action.photo.id] = action.photo
    //   return allPhotos

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