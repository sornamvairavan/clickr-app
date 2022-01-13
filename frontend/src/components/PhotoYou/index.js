import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Modal } from '../../context/Modal';
import { getAllPhotos } from '../../store/photo'
import PhotoDetails from '../PhotoDetails'
import SplashPage from '../SplashPage';
import './Photos.css';

export default function PhotoYou() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false)
  const [photosId, setPhotoId] = useState('')

  const sessionUser = useSelector(state => state.session.user);
  const allPhotosObj = useSelector(state => state.photo)

  const allPhotosArray = Object.values(allPhotosObj)

  let userId;
  if (sessionUser) {
    userId = sessionUser.id
  }

  const userPhotos = allPhotosArray.filter(photo => photo.userId === userId)

  const openPhotoDetails = (e) => {
    setPhotoId(e.target.id);
    setShowModal(true)
  }

  useEffect(() => {
    dispatch(getAllPhotos())
  }, [dispatch])


  if (sessionUser) {
    if (userPhotos.length > 0) {
      return (
        <>
          <div className='photos-container'>
            {userPhotos.map((photo, idx) => (
              <figure key={idx}>
                <img src={photo?.photoUrl} alt={photo?.caption} id={photo?.id}
                  className="displayedPhotos"
                  onClick={openPhotoDetails}
                  />
                  <div className="image_overlay">
                    <div className="image_username">{photo?.User?.username}</div>
                    <div className="image_comments">{photo?.Comments?.length} <i class="fas fa-comment"></i></div>
                  </div>
              </figure>
            ))}
          </div>
          {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <PhotoDetails photoId={photosId}/>
          </Modal>
        )}
        </>
      )
    } else {
      return (
        <div className="no-photos-container">
          <p>You have no photos to show here.</p>
          <Link to="/uploadPhoto">Upload Photo</Link>
        </div>
      )
    }
  }
  else {
    return (
      <SplashPage />
    )

  }
}