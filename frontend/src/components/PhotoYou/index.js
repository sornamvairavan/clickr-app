import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllPhotos } from '../../store/photo'
import SplashPage from '../SplashPage';
import './Photos.css';

export default function YouPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const allPhotosObj = useSelector(state => state.photo)
  console.log("OBJ!", allPhotosObj)

  const allPhotosArray = Object.values(allPhotosObj)

  let userId;
  if (sessionUser) {
    userId = sessionUser.id
  }

  const userPhotos = allPhotosArray.filter(photo => photo.userId === userId)

  useEffect(() => {
    dispatch(getAllPhotos())
  }, [])

  if (sessionUser) {
    return (
      <div className='photos-container'>
        {userPhotos.map(photo => (
          <img src={photo.photoUrl} key={photo.id} alt={photo.caption}/>
        ))}
      </div>
    )
  }
  else {
    return (
      <SplashPage />

    )

  }
}