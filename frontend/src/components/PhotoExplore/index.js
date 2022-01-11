import { Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Modal } from '../../context/Modal';
import PhotoDetails from '../PhotoDetails'
import { getAllPhotos } from '../../store/photo'
import '../PhotoYou/Photos.css';

export default function YouPage() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false)
  const [photosId, setPhotoId] = useState('')
  const sessionUser = useSelector(state => state.session.user);
  const allPhotosObj = useSelector(state => state.photo)

  const allPhotosArray = Object.values(allPhotosObj)

  const publicPhotos = allPhotosArray.filter(photo => photo.isPublic === true)

  const openPhotoDetails = (e) => {
    setPhotoId(e.target.id);
    setShowModal(true)
  }

  useEffect(() => {
    dispatch(getAllPhotos())
  }, [dispatch])

  if (!sessionUser) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <div className='photos-container'>
        {publicPhotos.map(photo => (
          <>
            <img src={photo.photoUrl} key={photo.id} alt={photo.caption} id={photo.id} 
            onClick={openPhotoDetails}/>
          </>
        ))}
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PhotoDetails photoId={photosId}/>
        </Modal>
      )}
    </>
  )
}