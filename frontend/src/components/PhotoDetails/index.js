import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import * as photoActions from '../../store/photo'
import './PhotoDetails.css'

export default function PhotoDetails(photoId) {
  const dispatch = useDispatch();
  let photosId = photoId.photoId
  const photo = useSelector(state => state.photo[photosId])
  const userId = useSelector(state => state.session.user.id);

  const deletePhotoButton = () => {
    const deletedPhoto = dispatch(photoActions.deletePhotoById(photo.id))
   if (deletedPhoto) {
     window.location.reload()
   }
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
              <Link to={`/${photo?.id}/edit`} className="photo-edit-button">
                Edit</Link>}
            {userId === photo?.userId && 
              <button onClick={deletePhotoButton} 
               className="photo-delete-button">
                Delete</button>}
          </div>
        </div>
      </div>
    </div>
  )
}