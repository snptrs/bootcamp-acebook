import React, { useState } from "react";
import { useParams } from "react-router-dom";
import '../../index.css'


const CreateLike = ({ postId, handleRefresh }) => {
  const [token] = useState(window.localStorage.getItem("token"));
  const params = useParams();


  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch(`/likes/${postId}`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (response.ok) {
      handleRefresh(); 
    }

  };

  const handleButtonClick = () => {
    if (buttonRef.current.classList.contains("liked")) {
      buttonRef.current.classList.remove("liked");
    } else {
      buttonRef.current.classList.add("liked");
    }
  };

  const buttonRef = React.createRef();

  return (
    <button
      ref={buttonRef}
      className="heart-like-button"
      onClick={handleButtonClick}
    >

    </button>
  );
};

export default CreateLike;
