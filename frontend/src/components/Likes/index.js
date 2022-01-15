import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import * as likeActions from '../../store/like';
import './Likes.css'

export default function LikesComponent(photoId) {
  const dispatch = useDispatch()

  const [updateLikeCount, setUpdateLikeCount] = useState('')

  let idOfPhoto = photoId.photoId
  const userId = useSelector(state => state.session.user.id)
  const allLikesObj = useSelector(state => state.like)
  const allLikesArray = Object.values(allLikesObj)

  const photoLikes = allLikesArray.filter(like => like.photoId === +idOfPhoto)
  
  const liked = photoLikes.find(like => like.userId === +userId)

  useEffect(() => {
    dispatch(likeActions.getAllLikes())
    setUpdateLikeCount('')
  }, [dispatch, updateLikeCount])

  
  const payload = {
    userId,
    photoId: idOfPhoto
  }

  const likePhoto = (e) => {
    return dispatch(likeActions.addLike(payload))
      .then(() => {
        setUpdateLikeCount("Increase count")
      })
    }

  const unlikePhoto = (e) => {
    let likedPhoto = photoLikes.find(like => like.userId === +userId)

    if (likedPhoto) {
      return dispatch(likeActions.removeLikeById(likedPhoto.id))
        .then(() => {
          setUpdateLikeCount("Decrease count")
        })
    }
  }

  let likeIcon;

  if (liked) {
    likeIcon = (
      <i className="fas fa-heart icon" onClick={unlikePhoto}></i>
    )
  } else {
    likeIcon = (
      <i className="far fa-heart" onClick={likePhoto}></i>
    )
  }

  return (
    <div className="likes-container">
      <div className="likes-icon">{likeIcon}</div>
        <span>
          {photoLikes.length === 0 && <div>{photoLikes.length} likes</div>}
          {photoLikes.length === 1 && <div>{photoLikes.length} like</div>}
          {photoLikes.length > 1 && <div>{photoLikes.length} likes</div>}
        </span>
    </div>
  )


}