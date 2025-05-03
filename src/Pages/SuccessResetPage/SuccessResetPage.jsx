import React, {useId} from 'react';
import "./SuccessResetPage.css";
import Button from '../../components/Button/Button';
import EclipseResponse from '../../components/EclipseResponse/EclipseResponse';
import {useNavigate} from 'react-router-dom';


const SuccessResetPage = () => {

    const textAreaId = "page-description".concat(useId());

    const navigate = useNavigate();

    const handleSubmit = () => {
        
        navigate("/login");
     }; 

    return(
    <div className="page-header-success-eclipse">

        <EclipseResponse 
        loc="/assets/images/successEclipse.png" 
        msg1="Password Updated" 
        msg2="Successfully"
        />

        <div  className="page-success-eclipse-msg-container">
            <textarea
                readOnly
                id={textAreaId}
                className="page-success-eclipse-msg"  
                placeholder="Password changed succesfully, you can login again with new password"
            />
        </div>
        <div className="page-success-eclipse-btn-container">
        <Button 
        submit={handleSubmit}
        type="Login"
        color="#20AE5C"/>
        </div>
    </div>
    );
}

export default SuccessResetPage;