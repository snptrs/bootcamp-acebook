import React from "react";
import "./Comment.css";

const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-GB", options);
};

const Comment = ({ comment }) => {
  return (
    <article className="comment" data-cy="comment" key={comment._id}>
     <div className="comment-header">
        <div className="comment-username">{comment.user.username}</div>
        <div className="comment-date">{formatDate(comment.created_at)}</div>
      </div>
      <div className="comment-content">{comment.comment}</div>
      <br />
    </article>
  );
};

export default Comment;