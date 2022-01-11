import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
// import { getPhotoById } from "../../store/photo";
// import { useEffect } from "react";

export default function PhotoDetails() {
  const dispatch = useDispatch();

  const { photoId } = useParams();
  const photo = useSelector(state => state.photo[photoId])
  const userId = useSelector(state => state.session.user.id);

  // useEffect(() => {
  //   dispatch(getPhotoById(photoId))
  // }, [])

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