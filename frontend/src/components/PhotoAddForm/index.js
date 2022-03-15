import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom'
import { uploadPhoto} from '../../store/photo'
import './PhotoAddForm.css'

export default function PhotoAddForm() {
  const [image, setImage] = useState(null)
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
      image,
      caption,
      isPublic
    }

    const fileType = image['type']
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png']

    if (validImageTypes.includes(fileType)) {
      return dispatch(uploadPhoto(payload))
        .catch(async (res) => {
          const data = await res.json()
          if (data.errors) setErrors(data.errors)
        }).then((res) => res && history.push('/'));
    } else {
      setErrors(["Please upload a valid file type"])
    }

  }

  const addFile = (e) => {
    const file = e.target.files[0]
    if (file) setImage(file)
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
        <div className="add-input-container">
          {errors.length > 0 && <ul className="errors">
          {errors.map((error, idx) => <li className="error" key={idx}>{error}</li>)}
            </ul>}
          <label htmlFor="photoUrl">Photo</label>
          <input
            type="file"
            name="photoUrl"
            required
            onChange={addFile}
          />
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
          <button type="submit" className="add-photo-button">Upload Photo</button>
        </div>
      </form>
    </div>
  )
}