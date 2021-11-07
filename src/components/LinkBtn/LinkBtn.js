import React from "react";
import "./LinkBtn.css";

function LinkBtn(props) {
  return (
    <div className="link-btn fs-15px">
      <p>{props.title}</p>
    </div>
  );
}

export default LinkBtn;
