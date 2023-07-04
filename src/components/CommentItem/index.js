import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment, colour} = commentDetails
  const initialLetter = name[0]
  console.log(name)
  return (
    <div className="comment-item-container">
      <li>
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
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            />
            <p className="like-text">Like</p>
          </div>
          <button className="delete-button" type="button">
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
