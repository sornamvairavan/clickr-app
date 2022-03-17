import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { deletePhotoById, getPublicPhotos, getSinglePhoto, getUserPhotos } from '../../store/photo'
import CommentsComponent from '../Comments';
import LikesComponent from '../Likes';
import { Modal } from '../../context/Modal';

import './PhotoDetails.css'

export default function PhotoDetails({ photoId, setShowModal, setIsLoaded, isLoaded }) {
  const dispatch = useDispatch();
  const photo = useSelector(state => state.photo?.singlePhoto)
  const userId = useSelector(state => state.session.user.id)

  const [showSureModal, setShowSureModal] = useState(false)

  useEffect(() => {
    dispatch(getSinglePhoto(+photoId))
    setIsLoaded(true)
  }, [dispatch, isLoaded])

  const deletePhotoButton = (e, photoId) => {
    e.preventDefault()
    const confirmed = window.confirm("Are you sure you want to delete this photo?")
    if (confirmed) {
      return dispatch(deletePhotoById(photoId))
        .then(() => dispatch(getUserPhotos(+userId)))
        .then(() => dispatch(getPublicPhotos()))
        .then(() => setShowModal(false))
        .then(() => setIsLoaded(!isLoaded))
    }
  }

  return (
    <div id="photo-details-container">
        <img src={photo?.photoUrl} alt={photo?.caption} className="photo-details-image" />
      <div id="photo-details">
        <h2 className="photo-caption">{photo?.caption}</h2>
        <p>by: <span>{photo?.User.username}</span></p>
        {userId === photo?.userId && 
          <Link to={`/photos/${photo?.id}/edit`} className="photo-edit-button">
            Edit</Link>}
        {userId === photo?.userId && 
          <button onClick={(e) => deletePhotoButton(e, photo.id)} 
            className="photo-delete-button">
            Delete</button>}
        <LikesComponent photoId={photo?.id} />
        <CommentsComponent photoId={photo?.id}/>
      </div>
    </div>
  )
}