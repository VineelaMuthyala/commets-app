import './index.css'

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
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeColour = isLiked ? 'like-text' : 'like-text-blue'

  return (
    <div className="comment-item-container">
      <li className="list-container">
        <div className="name-container">
          <div className={colour}>{initialLetter}</div>
          <h1 className="name">{name}</h1>
          <p className="time">2 min</p>
        </div>
        <div className="comment-container">
          <p className="comment-text">{comment}</p>
        </div>
        <div className="like-delete-container">
          <div className="like-container">
            <img
              className="like-icon"
              alt="like"
              src={likeIcon}
              onClick={likeButtonClicked}
            />
            <p className={likeColour}>Like</p>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={deleteComment}
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
