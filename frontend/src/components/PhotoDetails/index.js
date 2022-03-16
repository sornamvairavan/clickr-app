import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { deletePhotoById, getPublicPhotos, getSinglePhoto, getUserPhotos } from '../../store/photo'
import CommentsComponent from '../Comments';
import LikesComponent from '../Likes';

import './PhotoDetails.css'

export default function PhotoDetails({ photoId, setShowModal, setIsLoaded, isLoaded }) {
  const dispatch = useDispatch();
  const photo = useSelector(state => state.photo?.singlePhoto)
  const userId = useSelector(state => state.session.user.id)

  useEffect(() => {
    dispatch(getSinglePhoto(+photoId))
    setIsLoaded(!isLoaded)
  }, [dispatch, isLoaded])

  const deletePhotoButton = () => {
    dispatch(deletePhotoById(photo.id))
    dispatch(getUserPhotos(+userId))
    dispatch(getPublicPhotos())
    setShowModal(false)
    setIsLoaded(!isLoaded)
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