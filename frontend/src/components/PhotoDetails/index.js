import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { deletePhotoById, getAllPhotos } from '../../store/photo'
import CommentsComponent from '../Comments';
import { getAllComments } from '../../store/comment';
import LikesComponent from '../Likes';

import './PhotoDetails.css'

export default function PhotoDetails({ photoId, setShowModal, setIsLoaded, isLoaded }) {
  const dispatch = useDispatch();
  const photo = useSelector(state => state.photo[photoId])
  const userId = useSelector(state => state.session.user.id)

  useEffect(() => {
    // dispatch(getAllPhotos())
    dispatch(getAllComments())
  }, [dispatch])

  const deletePhotoButton = () => {
    dispatch(deletePhotoById(photo.id))
    setShowModal(false)
    // setIsLoaded(!isLoaded)
  }

  return (
    <div>
      <div id='photo-details-modal'>
        <div id="photo-details-container">
            <img src={photo?.photoUrl} alt={photo?.caption}/>
          <div id="photo-details">
            <h2 className="photo-caption">{photo?.caption}</h2>
            <p>by: <span>{photo?.User.username}</span></p>
            {userId === photo?.userId && 
              <Link to={`/photos/${photo?.id}/edit`} className="photo-edit-button">
                Edit</Link>}
            {userId === photo?.userId && 
              <button onClick={deletePhotoButton} 
               className="photo-delete-button">
                Delete</button>}
            <LikesComponent photoId={photo?.id} />
            <CommentsComponent photoId={photo?.id}/>
          </div>
        </div>
      </div>
    </div>
  )
}