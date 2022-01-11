
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './PhotoDetails.css'

export default function PhotoDetails(photoId) {
  let photosId = photoId.photoId
  const photo = useSelector(state => state.photo[photosId])
  const userId = useSelector(state => state.session.user.id);

  return (
    <div>
      <div id='photo-details-modal'>
        <div id="photo-details-container">
            <img src={photo?.photoUrl} alt={photo?.caption}/>
          <div id="photo-details">
            <h2 className="photo-caption">{photo?.caption}</h2>
            <p>by: <span>{photo?.User.username}</span></p>
            {userId === photo?.userId && <button className="photo-edit-button">Edit</button>}
            {userId === photo?.userId && <button className="photo-delete-button">Delete</button>}
          </div>
        </div>
      </div>
    </div>
  )
}