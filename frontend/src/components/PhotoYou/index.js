import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Modal } from '../../context/Modal';
import { getUserPhotos } from '../../store/photo'
import PhotoDetails from '../PhotoDetails'
import SplashPage from '../SplashPage';
import './Photos.css';

export default function PhotoYou() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false)
  const [photosId, setPhotoId] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)
  // const [userPhotos, setUserPhotos] = useState([])

  const sessionUser = useSelector(state => state?.session?.user);
  const allUserPhotosObj = useSelector(state => state?.photo)
  console.log(allUserPhotosObj)
  let userPhotos = Object.values(allUserPhotosObj.userPhotos)

  let userId;
  if (sessionUser) {
    userId = sessionUser.id
  }

  const openPhotoDetails = (e) => {
    setPhotoId(e.target.id);
    setShowModal(true)
  }

  const closePhotoDetails = () => {
    setShowModal(false)
    setIsLoaded(true)
  }

  useEffect(() => {
    dispatch(getUserPhotos(+userId))
    // setIsLoaded(true)
  }, [dispatch])

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
                  <div className="image_overlay" onClick={openPhotoDetails} id={photo?.id}>
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
            <PhotoDetails photoId={photosId} setShowModal={setShowModal} setIsLoaded={setIsLoaded} isLoaded={setIsLoaded}/>
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