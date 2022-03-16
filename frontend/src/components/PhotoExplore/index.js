import { Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Modal } from '../../context/Modal';
import PhotoDetails from '../PhotoDetails'
import { getPublicPhotos } from '../../store/photo'
import '../PhotoYou/Photos.css';

export default function YouPage() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false)
  const [photosId, setPhotoId] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  const sessionUser = useSelector(state => state.session.user);
  const allPhotosObj = useSelector(state => state.photo.publicPhotos)

  const publicPhotos = Object.values(allPhotosObj)

  const openPhotoDetails = (e) => {
    setPhotoId(e.target.id);
    setShowModal(true)
  }

  const closePhotoDetails = () => {
    setShowModal(false)
    setIsLoaded(true)
  }

  useEffect(() => {
    dispatch(getPublicPhotos())
    setIsLoaded(false)
  }, [dispatch, isLoaded])

  if (!sessionUser) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <div className='photos-container'>
        {publicPhotos.map((photo, idx) => (
          <figure key={idx}>
            <img src={photo.photoUrl} alt={photo.caption} 
              className="displayedPhotos"
              />
            <div className="image_overlay" id={photo.id} onClick={openPhotoDetails}>
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
          <PhotoDetails photoId={photosId} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  )
}