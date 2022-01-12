import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Redirect, useParams } from 'react-router-dom'
import { updatePhotoById, getAllPhotos } from '../../store/photo'

export default function PhotoEditForm() {
  const {photoId} = useParams();
  const dispatch = useDispatch();
  const history = useHistory()

  const sessionUser = useSelector(state => state.session.user)
  const photo = useSelector(state => ({...state.photo[photoId]}))

  useEffect(() => {
    dispatch(getAllPhotos())
  }, [dispatch])


  const [photoUrl, setPhotoUrl] = useState(photo.photoUrl)
  const [caption, setCaption] = useState(photo.caption)
  const [isPublic, setIsPublic] = useState(photo.isPublic)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      photoId,
      caption,
      isPublic
    }
    
    const updatedPhoto = await dispatch(updatePhotoById(payload));

    if (updatedPhoto) {
      history.push("/")
    }
  }

  // if (photo?.userId !== Number(sessionUser.id)) {
  //   return (
  //     <Redirect to="/" />
  //   )
  // }

  return (
    <>
    {photo.photoUrl && 
      <div className="add-photo-container">
      <form className='add-photo-form' onSubmit={handleSubmit}>
        <h1 className="add-form-title">Edit Photo</h1>
        <div className="add-input-container">
          <a href={photo.photoUrl || photoUrl} target="_blank" rel="noreferrer" className="photoUrl">Photo URL</a>
          <label htmlFor="caption">Caption</label>
          <input 
            type="text"
            name="caption"
            autoComplete="off"
            placeholder='Optional caption'
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            defaultValue={photo.caption}
          />
          <label htmlFor="isPublic">Visible to everyone?</label>
            <span className="add-photo-radio">
              <label htmlFor="yes">
              <input
                type="radio"
                id="yes"
                value={true}
                name="isPublic"
                checked={isPublic === true}
                onChange={(e) => setIsPublic(true)}
              />Yes
              </label>
              <label htmlFor="no">
              <input
                type="radio"
                id="no"
                value={false}
                name="isPublic"
                checked={isPublic === false}
                onChange={(e) => setIsPublic(false)}
              />No
              </label>
            </span>
          <button type="submit" className="add-photo-button">Save Changes</button>
        </div>
      </form>
    </div>}
    </>
  )
}