import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import * as likeActions from '../../store/like';

export default function LikesComponent(photoId) {
  const dispatch = useDispatch()

  const [addLike, setAddLike] = useState('')
  const [unlike, setUnlike] = useState('')

  useEffect(() => {
    dispatch(likeActions.getAllLikes())
  }, [dispatch])

  let idOfPhoto = photoId.photoId
  const userId = useSelector(state => state.session.user.id)
  const allLikesObj = useSelector(state => state.like)
  const allLikesArray = Object.values(allLikesObj)
  const photoLikes = allLikesArray.filter(like => like.photoId === + idOfPhoto)
  
  return (
    <div className="likes-container">
        <i className="far fa-heart"></i>
        <i className="fas fa-heart"></i>
        <span>
          {photoLikes.length === 1 && <div>{photoLikes.length} like</div>}
          {photoLikes.length > 1 || photoLikes.length === 0 && <div>{photoLikes.length} likes</div>}
        </span>
    </div>
  )


}