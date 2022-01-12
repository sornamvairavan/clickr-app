import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import * as commentActions from '../../store/comment';
import './Comments.css'

export default function CommentsComponent(photoId) {
  const dispatch = useDispatch()

  const [content, setContent] = useState('')
  const [addCom, setAddCom] = useState('')
  const [delCom, setDelCom] = useState('')

  useEffect(() => {
    dispatch(commentActions.getAllComments())
      setDelCom('')
      setAddCom('')
  }, [dispatch, addCom, delCom])

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
      setAddCom("Added Comment")
    }
  }

  const deleteComment = (e) => {
    let deletedComment = dispatch(commentActions.deleteCommmentById(e.target.id))
    
    if(deletedComment) {
      setDelCom('Delete successful')
    }
  }

  return (
    <div>
      <div className='comments-header'>Comments</div>
        <div className='comments-container'>
          {photoComments.length > 0 && photoComments.map((comment, idx, idx2) => (
            <div key={idx*100} className="comments-content">
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