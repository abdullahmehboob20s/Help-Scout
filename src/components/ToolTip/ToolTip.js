import React from "react";
import "./ToolTip.css";

function ToolTip(props) {
  const { to } = props;
  return (
    <div className="tooltip">
      The shared inbox designed with all the organization, collaboration, and
      automation features your team needs to do more with less and give
      customers a human, helpful experience. <a href="#">Learn More</a>
    </div>
  );
}

export default ToolTip;
