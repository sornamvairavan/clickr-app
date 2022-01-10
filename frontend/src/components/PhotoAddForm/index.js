import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom'
import * as photoActions from '../../store/photo'
import './PhotoAddForm.css'

export default function PhotoAddForm() {
  const [photoUrl, setPhotoUrl] = useState('')
  const [caption, setCaption] = useState('')
  const [isPublic, setIsPublic] = useState(true)
  const [errors, setErrors] = useState([])

  const dispatch = useDispatch();
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user)

  const uploadHandleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: sessionUser.id,
      photoUrl,
      caption,
      isPublic
    }
    
    const newPhoto = await dispatch(photoActions.uploadPhoto(payload));

    if (newPhoto) {
      history.push("/")
      reset()
    }
    
    return newPhoto
      .catch(async (res) => {
        const data = await res.json()
        if (data && data.errors) setErrors(data.errors)
      })

  }

  const reset = () => {
    setPhotoUrl('');
    setCaption('')
    setIsPublic(true)
    setErrors([])
  }


  if (!sessionUser) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <div className="add-photo-container">
      <form className='add-photo-form' onSubmit={uploadHandleSubmit}>
        <h1 className="add-form-title">Upload Photo</h1>
        {errors.length > 0 && <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>}
        <div className="add-input-container">
          <label htmlFor="photoUrl">Photo URL</label>
          <input
            type="url"
            name="photoUrl"
            placeholder='Photo URL'
            required
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
          <label htmlFor="caption">Caption</label>
          <input 
            type="text"
            name="caption"
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
                className
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
          <button type="submit" className="add-photo-button">Upload Photo</button>
        </div>
      </form>
    </div>
  )
}