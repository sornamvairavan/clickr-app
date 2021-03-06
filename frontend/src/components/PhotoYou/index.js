import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Modal } from '../../context/Modal';
import { getUserPhotos } from '../../store/photo'
import PhotoDetails from '../PhotoDetails'
import './Photos.css';

export default function PhotoYou() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false)
  const [photosId, setPhotoId] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  const sessionUser = useSelector(state => state?.session?.user);
  const allUserPhotosObj = useSelector(state => state?.photo?.userPhotos)
  const userPhotos = Object.values(allUserPhotosObj)

  let userId;
  if (sessionUser) {
    userId = sessionUser.id
  }

  const openPhotoDetails = (photoId) => {
      setPhotoId(photoId);
      setShowModal(true)
  }

  const closePhotoDetails = () => {
    setShowModal(false)
    setIsLoaded(!isLoaded)
  }

  useEffect(() => {
    dispatch(getUserPhotos(+userId))
    setIsLoaded(true)
  }, [dispatch, isLoaded])

  if (sessionUser) {
    if (userPhotos.length > 0) {
      return (
        <>
          <div className='photos-container'>
            {userPhotos.map((photo, idx) => (
              <figure key={idx}>
                <img src={photo?.photoUrl} alt={photo?.caption}
                  className="displayedPhotos"
                  />
                  <div className="image_overlay" onClick={() => openPhotoDetails(photo.id)} >
                    <div className="image_username">{photo?.User?.username}</div>
                    <div className="image_comments-likes">
                      {photo?.Likes?.length} <i className="fas fa-heart"></i>
                      {photo?.Comments?.length} <i className="fas fa-comment"></i>
                    </div>
                  </div>
              </figure>
            ))}
          </div>
          {showModal && (
          <Modal onClose={closePhotoDetails}>
            <PhotoDetails photoId={photosId} setShowModal={setShowModal} setIsLoaded={setIsLoaded} isLoaded={isLoaded}/>
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
}