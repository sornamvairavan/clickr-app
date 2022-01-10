import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllPhotos } from '../../store/photo'
import '../PhotoYou/Photos.css';

export default function YouPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const allPhotosObj = useSelector(state => state.photo)

  const allPhotosArray = Object.values(allPhotosObj)

  const publicPhotos = allPhotosArray.filter(photo => photo.isPublic === true)

  useEffect(() => {
    dispatch(getAllPhotos())
  }, [])

  if (!sessionUser) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <div className='photos-container'>
      {publicPhotos.map(photo => (
        <>
          <img src={photo.photoUrl} key={photo.id} alt={photo.caption}/>
          {/* <span>{photo.caption}</span> */}
        </>
      ))}
    </div>
  )
}