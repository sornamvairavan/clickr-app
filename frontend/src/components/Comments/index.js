import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as commentActions from '../../store/comment';
import './Comments.css'

export default function CommentsComponent(photoId) {
  const dispatch = useDispatch()
  const history = useHistory()

  const [content, setContent] = useState('')

  useEffect(() => {
    dispatch(commentActions.getAllComments())
  }, [dispatch])
  


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
      let pathname = window.location.pathname;
      if (pathname === "/explore" || pathname === "/") {
        history.push(`/photos/${idOfPhoto}`)
      } else {
        window.location.reload()
      }
    }
  }

  const deleteComment = (e) => {
    let deletedComment = dispatch(commentActions.deleteCommmentById(e.target.id))
    
    if(deletedComment) {
      let pathname = window.location.pathname;
      if (pathname === "/explore" || pathname === "/") {
        history.push(`/photos/${idOfPhoto}`)
      } else {
        window.location.reload()
      }
    }
  }

  return (
    <div>
      <div className='comments-header'>Comments</div>
        <div className='comments-container'>
          {photoComments.length > 0 && photoComments.map((comment, idx) => (
            <div key={idx*5} className="comments-content">
              <div key={idx}>{comment.User.username}: </div>
              <span key={comment.id}>{comment.content}
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