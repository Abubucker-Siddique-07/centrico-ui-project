import React, { useId } from 'react';
import "./EclipseResponse.css"; 

const EclipseResponse = ({loc, msg1, msg2, color}) => {

    const imgId = useId();
    const spanMsgId1 = useId();
    const spanMsgId2 = useId();        

    return (
      <div className="success-eclipse-container">
        <img 
        id={imgId}
        src={loc} 
        alt="eclipseIcon"/>

        <div className="success-eclipse-span-container">
            <span
            style={{color : color}}
            id={spanMsgId1}>
                {msg1}
            </span>
            <span
            style={{color : color}}
            id={spanMsgId2}>
                {msg2}
            </span>
        </div>

      </div>
    );
  };


export default EclipseResponse;