import React, { useId } from 'react';
import "./PageTitle.css"; 

const PageTitle = ({weight, title, description}) => {

    const textAreaId = "page-description".concat(useId());
    const spanTitleId = "page-title".concat(useId());

    const descriptionArea = 
    <textarea
    readOnly
    id={textAreaId}
    className="description-textarea"
    placeholder={description}
  />


    return (
      <div className="page-header">
        <span 
        style={{fontWeight : weight,}}
        id={spanTitleId}
        className="page-title">
            {title}
        </span>
  
        <div className="description-container">
            {description && descriptionArea}
        </div>
      </div>
    );
  };


export default PageTitle;