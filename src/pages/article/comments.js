import React from 'react';

const Comments = () => (
  <div className="mt-5">
    <div className="row">
      <div className="col-12">
        <h4>Add Comment</h4>
        <form>
          <div className="mb-3">
            <textarea className="form-control" id="sendcomment" rows="3" />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Add Comment</button>
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
          <li className="list-group-item">
            <span>09/06/2021</span>
            A second item
          </li>
          <li className="list-group-item">
            <span>09/06/2021</span>
            A second item
          </li>
          <li className="list-group-item">
            <span>09/06/2021</span>
            A second item
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Comments;
