import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { uploadPhoto } from '../../store/photo'
import './PhotoAddForm.css'

export default function PhotoAddForm() {
  const [photoUrl, setPhotoUrl] = useState('')
  const [caption, setCaption] = useState('')
  const [isPublic, setIsPublic] = useState(true)

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)

  return (
    <div className="add-photo-container">
      <form className='add-photo-form'>
        <h1 className="add-form-title">Upload Photo</h1>
        <div className="add-input-container">
          <label htmlFor="photoUrl">Photo URL</label>
          <input
            type="text"
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
            placeholder='Caption'
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