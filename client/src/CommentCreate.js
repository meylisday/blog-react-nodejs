import axios from "axios";
import React, { useState, useEffect } from "react";
import './style.css'

const Fn = ({ postId }) => {
  const [content, setContent] = useState("");
  const onSubmit = async (event) => {
      event.preventDefault();
      await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
          content
      });
      setContent('');
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="formGroup">
          <label>New comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default Fn;
