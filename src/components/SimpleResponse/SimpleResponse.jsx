import React, { useId } from 'react';
import "./SimpleResponse.css"; 

const SimpleResponse = ({loc, msg, color}) => {

  const imgId = useId();
  const spanMessageId = "message".concat(useId());

  return (
    <div className="simlpe-response-container">
      <img
      id={imgId}
      src={loc}
      alt="simpleIcon"
      />
      <span
      id={spanMessageId}
      style={{color : color}}>
        {msg}
      </span>
    </div>
  );
};


export default SimpleResponse;