import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], comment: '', name: '', colourId: 0}

  addComment = event => {
    event.preventDefault()
    const {comment, name, colourId} = this.state
    const newContact = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      colour: initialContainerBackgroundClassNames[colourId],
    }
    this.setState(prevstate => ({
      commentsList: [...prevstate.commentsList, newContact],
      name: ' ',
      comment: ' ',
      colourId: prevstate.colourId + 1,
    }))
  }

  personsName = event => {
    this.setState({name: event.target.value})
  }

  commentText = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="comments-container">
          <div className="add-comments-container">
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              className="name-input"
              type="text"
              placeholder="Your Name"
              onChange={this.personsName}
              value={name}
            />
            <textarea
              className="text-area"
              value={comment}
              rows="6"
              cols="50"
              placeholder="Your Comment"
              onChange={this.commentText}
            />
            <button className="button" type="submit" onClick={this.addComment}>
              Add Comment
            </button>
          </div>
          <img
            className="image"
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
        </div>
        <hr className="line" />
        <div className="comments-count-container">
          <div className="comments-count">2</div>
          <p className="comments-text">Comments</p>
        </div>
        <div>
          <ul className="unordered-list">
            {commentsList.map(eachItem => (
              <CommentItem key={eachItem.id} commentDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
