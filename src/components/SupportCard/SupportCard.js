import React from "react";

function SupportCard(props) {
  return (
    <div className={`ring-outer-content first ${props.className}`}>
      <img src={props.img} alt="" className="ring-outer-content-img mb-10px" />
      <p className="uppercase fs-10px light-blue text-center graphik-medium lh-2">
        {props.children}
      </p>
    </div>
  );
}

export default SupportCard;
