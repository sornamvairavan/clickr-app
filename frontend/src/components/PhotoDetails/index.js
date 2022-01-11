
import { useDispatch, useSelector } from 'react-redux'
// import { getPhotoById } from "../../store/photo";
// import { useEffect } from "react";

export default function PhotoDetails(photoId) {
  let photosId = photoId.photoId
  const photo = useSelector(state => state.photo[photosId])
  const userId = useSelector(state => state.session.user.id);

  return (
    <div>
      <div>
        <h2>{photo?.caption}</h2>
        <img src={photo?.photoUrl} alt={photo?.caption} />
        <p>By {photo?.User.username}</p>
        {userId === photo?.userId && <p>Edit photo</p>}
      </div>
    </div>
  )
}