import React, {useId} from 'react';
import "./FailureResetPage.css";
import Button from '../../components/Button/Button';
import EclipseResponse from '../../components/EclipseResponse/EclipseResponse';

const FailureResetPage = () => {

    const textAreaId = "page-description".concat(useId());

    return(
    <div className="page-header-fail-eclipse">

        <EclipseResponse 
        loc="/assets/images/eclipseFailure.png" 
        msg1="ERROR!" 
        color="#F21E1EED"
        />

        <div  className="page-fail-eclipse-msg-container">
            <textarea
                readOnly
                id={textAreaId}
                className="page-fail-eclipse-msg"  
                placeholder="Password Update Failure Please try again to complete the request."
            />
        </div>
        <div className="page-fail-eclipse-btn-container">
        <Button type="Try Again" color="#F21E1EED"/>
        </div>
    </div>
    );
}

export default FailureResetPage;