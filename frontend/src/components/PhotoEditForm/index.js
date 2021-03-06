import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams, Redirect, Link } from 'react-router-dom'
import { updatePhotoById, getUserPhotos, getSinglePhoto } from '../../store/photo'
import PageNotFound from "../PageNotFound";

export default function PhotoEditForm() {
  const { photoId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory()

  const sessionUser = useSelector(state => state.session.user)
  const photo = useSelector(state => state.photo?.singlePhoto)

  if (photo) {
    localStorage.setItem('photoUrl', photo.photoUrl)
    localStorage.setItem('caption', photo.caption || "")
    localStorage.setItem('isPublic', photo.isPublic)
}

  const [photoUrl, setPhotoUrl] = useState(localStorage.getItem('photoUrl'))
  const [caption, setCaption] = useState(localStorage.getItem('caption'));
  const [isPublic, setIsPublic] = useState(localStorage.getItem('isPublic') === "true" ? true : false);

  useEffect(() => {
    dispatch(getSinglePhoto(+photoId))
    dispatch(getUserPhotos(+sessionUser?.id))
  }, [dispatch, photoId, sessionUser])

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
          <img src={photoUrl} alt={caption} className="edit-image" />
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
            <span className="photo-buttons">
              <button type="submit" className="add-photo-button">Save Changes</button>
              <Link to="/" className="cancel-button">Cancel</Link>
            </span>
        </div>
      </form>
    </div>
  )
}