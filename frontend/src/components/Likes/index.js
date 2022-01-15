import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import * as likeActions from '../../store/like';

export default function LikesComponent(photoId) {
  const dispatch = useDispatch()

  const [addLike, setAddLike] = useState('')
  const [unlike, setUnlike] = useState('')

  useEffect(() => {
    
  })

  let idOfPhoto = photoId.photoId
  const userId = useSelector(state => state.session.user.id)
  
  const 


}