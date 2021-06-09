import React, { Component } from 'react';

const Comment = ({ item }) => {
  const { date, text } = item;

  return (
    <li className="list-group-item">
      <span>{`${date} -> ${text}`}</span>
    </li>
  );
};

class Comments extends Component {
  constructor() {
    super();

    this.state = {
      comments: []
    };

    this.textArea = React.createRef();
    this.handleAddComment = this.handleAddComment.bind(this);
  }

  handleAddComment() {
    const { comments } = this.state;
    const date = new Date();

    const commentsUpdated = comments.concat({
      date: date.toUTCString(),
      text: this.textArea.current.value
    });

    this.setState({
      comments: commentsUpdated
    });

    this.textArea.current.value = '';
  }

  render() {
    const { comments } = this.state;

    return (
      <div className="mt-5">
        <div className="row">
          <div className="col-12">
            <h4>Add Comment</h4>
            <form>
              <div className="mb-3">
                <textarea ref={this.textArea} className="form-control" id="sendcomment" rows="3" />
              </div>
              <div className="mb-3">
                <button type="button" onClick={this.handleAddComment} className="btn btn-primary">Add Comment</button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>View comments</h4>
          </div>
          <div className="col-12">
            <ul className="list-group">
              {comments.map((item) => <Comment item={item} />)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
