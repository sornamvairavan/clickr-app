import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams, Redirect } from 'react-router-dom'
import { updatePhotoById, getAllPhotos } from '../../store/photo'
import PageNotFound from "../PageNotFound";

export default function PhotoEditForm() {
  const { photoId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory()

  const sessionUser = useSelector(state => state.session.user)
  const photo = useSelector(state => state.photo[photoId])

  useEffect(() => {
    dispatch(getAllPhotos())
  }, [dispatch])


  useEffect(() => {
    if (photo && (!photoUrl && !caption)) {
      setPhotoUrl(photo.photoUrl)
      setCaption(photo.caption)
      setIsPublic(photo.isPublic)
    }
  }, [photo])


  const [photoUrl, setPhotoUrl] = useState("")
  const [caption, setCaption] = useState("")
  const [isPublic, setIsPublic] = useState("")

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
  
  if (+photo?.userId !== +sessionUser.id) {
    return (
      <PageNotFound />
    )
  }


  return (
    <div className="add-photo-container">
      <form className='add-photo-form' onSubmit={handleSubmit}>
        <h1 className="add-form-title">Edit Photo</h1>
        <div className="add-input-container">
          <img src={photoUrl} alt="photo" className="edit-image" />
          {/* <a href={photoUrl} target="_blank" rel="noreferrer" className="photoUrl">Photo URL</a> */}
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
    </div>
  )
}