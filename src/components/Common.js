import React from "react";

const Common = (props) => {
  return (
    <>
      <div className="headerSection">
        <h1 className="display-3">{props.heading}</h1>
      </div>
    </>
  );
}

export default Common;
