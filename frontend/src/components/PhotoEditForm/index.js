import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Redirect, useParams } from 'react-router-dom'
import { updatePhotoById, getAllPhotos } from '../../store/photo'

export default function PhotoEditForm() {
  const {photoId} = useParams();
  const dispatch = useDispatch();
  
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user)
  const photo = useSelector(state => state.photo[photoId])

  useEffect(() => {
    // setTimeout(()=> setPhotoUrl(photo?.photoUrl), 20)
    // setTimeout(()=> setCaption(photo?.caption), 20)
    // setTimeout(()=> setIsPublic(photo?.isPublic), 20)
    dispatch(getAllPhotos())

  }, [dispatch])

  const [photoUrl, setPhotoUrl] = useState(photo?.photoUrl)
  const [caption, setCaption] = useState(photo?.caption)
  const [isPublic, setIsPublic] = useState(photo?.isPublic)


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

  if (!sessionUser) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <div className="add-photo-container">
      <form className='add-photo-form' onSubmit={handleSubmit}>
        <h1 className="add-form-title">Edit Photo</h1>
        <div className="add-input-container">
          <a href={photoUrl} target="_blank" rel="noreferrer" className="photoUrl">Photo URL</a>
          <label htmlFor="caption">Caption</label>
          <input 
            type="text"
            name="caption"
            autoComplete="off"
            placeholder='Optional caption'
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <label htmlFor="isPublic">Visible to everyone?</label>
            <span className="add-photo-radio">
              <label htmlFor="yes">
              <input
                type="radio"
                value={true}
                name="isPublic"
                checked={isPublic === true}
                onChange={(e) => setIsPublic(true)}
              />Yes
              </label>
              <label htmlFor="no">
              <input
                type="radio"
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
    </div>
  )
}