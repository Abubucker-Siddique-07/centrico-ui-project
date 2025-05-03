import {React} from 'react';
import "./FailureOtpPage.css";
import Button from '../../components/Button/Button';
import SimpleResponse from '../../components/SimpleResponse/SimpleResponse';
import {useNavigate, useLocation} from 'react-router-dom';


const FailureOtpPage = () => {

    const navigate = useNavigate();
    const location = useLocation();



    const handleSubmit = () => {
       const index = location.pathname.lastIndexOf('/');
       navigate(location.pathname.slice(0, index));
    }; 


    return(
    <div className="page-header-fail">

        <SimpleResponse
        loc="/assets/images/xCircle.png"
        msg="ERROR!"
        color="#F21E1EED"
        />


        <span className="page-fail-msg">OTP Authentication Failed</span>
        <span className="page-fail-msg2">Please try again</span>
        
        <div className="page-fail-btn-container">
        <Button 
        type="Try Again"
        submit={handleSubmit}
        color="#F21E1EED"/>
        </div>
    </div>
    );
}

export default FailureOtpPage;