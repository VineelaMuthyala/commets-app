import {formatDistanceToNow} from 'date-fns'
import './index.css'

const date = new Date()
console.log(date)

const time = formatDistanceToNow(new Date(date))

const CommentItem = props => {
  const {commentDetails, deleteTheComment, toggleSwitch} = props
  const {name, comment, colour, id, isLiked} = commentDetails
  const initialLetter = name[0]
  console.log(name)

  const deleteComment = () => {
    deleteTheComment(id)
  }

  const likeButtonClicked = () => {
    toggleSwitch(id)
  }
  const likeIcon = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const likeColour = isLiked ? 'like-text-blue' : 'like-text'

  return (
    <div className="comment-item-container">
      <li className="list-container">
        <div className="name-container">
          <div className={colour}>{initialLetter}</div>
          <h1 className="name">{name}</h1>
          <p className="time">{time}</p>
        </div>
        <div className="comment-container">
          <p className="comment-text">{comment}</p>
        </div>
        <div className="like-delete-container">
          <button
            type="button"
            className="like-container"
            onClick={likeButtonClicked}
          >
            <img className="like-icon" alt="like" src={likeIcon} />
            <p className={likeColour}>Like</p>
          </button>
          <button
            className="delete-button"
            type="button"
            onClick={deleteComment}
            data-testid="delete"
          >
            <img
              className="delete-icon"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            />
          </button>
        </div>
        <hr className="line" />
      </li>
    </div>
  )
}

export default CommentItem
