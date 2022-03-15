import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import * as commentActions from '../../store/comment';
import './Comments.css'

export default function CommentsComponent(photoId) {
  const dispatch = useDispatch()

  const [content, setContent] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(commentActions.getAllComments())
      .then(() => setIsLoaded(true))
  }, [dispatch, isLoaded])

  let idOfPhoto = photoId.photoId;
  const userId = useSelector(state => state.session.user.id);
  const allCommentsObj = useSelector(state => state.comment)
  
  const allCommentsArray = Object.values(allCommentsObj)
  const photoComments = allCommentsArray.filter(comment => comment.photoId === +idOfPhoto)
  
  const postComment = (e) => {
    e.preventDefault();

    const payload = {
      userId,
      photoId: idOfPhoto,
      content
    }

    let newComment = dispatch(commentActions.addComment(payload))
    if(newComment) {
      setContent('')
      setIsLoaded(!isLoaded)
    }
  }

  const deleteComment = (e) => {
    let deletedComment = dispatch(commentActions.deleteCommmentById(e.target.id))
    
    if(deletedComment) {
      setIsLoaded(!isLoaded)
    }
  }

  return (
    <div className="comments-container">
      <div className='comments-header'>Comments ({photoComments?.length})</div>
        <div className='comments-list'>
          {photoComments.length > 0 && photoComments.map((comment, idx) => (
            <div key={idx} className="comments-content">
              <div>{comment.User.username}: </div>
              <span>{comment.content}
                {comment.User.id === userId && 
                  <i className="fas fa-times" id={comment.id} onClick={deleteComment}></i>}</span>
            </div>
          ))}
        </div>
        <div className="post-comment">
          <input
            type="text"
            placeholder='Add a comment...'
            autoComplete="off"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
            <button disabled={!content.length} onClick={postComment} type="submit">Post</button>
        </div>
    </div>
  )
}