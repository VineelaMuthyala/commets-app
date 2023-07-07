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
  state = {commentsList: [], comment: '', name: ''}

  addComment = event => {
    event.preventDefault()
    const {comment, name} = this.state
    const initialContainerBackgroundColor = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newContact = {
      id: uuidv4(),
      name,
      comment,
      isLiked: true,
      colour: initialContainerBackgroundColor,
    }

    this.setState(prevstate => ({
      commentsList: [...prevstate.commentsList, newContact],
    }))
    this.setState({name: '', comment: ''})
  }

  personsName = event => {
    this.setState({name: event.target.value})
  }

  commentText = event => {
    this.setState({comment: event.target.value})
  }

  deleteTheComment = id => {
    const {commentsList} = this.state
    console.log(id)
    console.log(commentsList)
    const filteredList = commentsList.filter(eachItem => eachItem.id !== id)
    this.setState({commentsList: [...filteredList]})
  }

  toggleSwitch = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <form>
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
                rows="6"
                cols="100"
                placeholder="Your Comment"
                onChange={this.commentText}
                value={comment}
              />
              <button
                className="button"
                type="submit"
                onClick={this.addComment}
              >
                Add Comment
              </button>
            </div>

            <img
              className="image"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </form>
        <hr className="line" />
        <div className="comments-count-container">
          <div className="comments-count">{commentsList.length}</div>
          <p className="comments-text">Comments</p>
        </div>
        <div>
          <ul className="unordered-list">
            {commentsList.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                commentDetails={eachItem}
                deleteTheComment={this.deleteTheComment}
                toggleSwitch={this.toggleSwitch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
