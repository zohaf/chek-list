import React from "react";
// import axios from "axios";
// import { CLIPS } from "../../auth/serverData";

const RemoveItem = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    // axios.delete(`${CLIPS}/${props.clipId}`).then((response) => {
    //   props.fetchClips();
    // });
  };

  return (
    <a className="item-icon" onClick={handleClick}>
      <svg
        className="btn-icon-secondary"
        width="20"
        height="20"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 0C5.83227 0 0 5.83227 0 13C0 20.1677 5.83227 26 13 26C20.1677 26 26 20.1677 26 13C26 5.83227 20.1677 0 13 0ZM13 23.6364C7.13464 23.6364 2.36364 18.8642 2.36364 13C2.36364 7.13582 7.13464 2.36364 13 2.36364C18.8654 2.36364 23.6364 7.13582 23.6364 13C23.6364 18.8642 18.8654 23.6364 13 23.6364Z" />
        <path d="M17.7272 11.8184H8.27264C7.61909 11.8184 7.09082 12.3478 7.09082 13.0002C7.09082 13.6525 7.61909 14.182 8.27264 14.182H17.7272C18.3807 14.182 18.909 13.6525 18.909 13.0002C18.909 12.3478 18.3807 11.8184 17.7272 11.8184Z" />
      </svg>
    </a>
  );
};

export default RemoveItem;
