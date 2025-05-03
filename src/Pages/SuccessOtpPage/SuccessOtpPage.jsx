import {React} from 'react';
import "./SuccessOtpPage.css";
import Button from '../../components/Button/Button';
import SimpleResponse from '../../components/SimpleResponse/SimpleResponse';
import {useNavigate} from 'react-router-dom';


const SuccessOtpPage = () => {

    const navigate = useNavigate();


    const handleSubmit = () => {
        navigate("/forgotPass/passwordReset");
     }; 
     
    
    return(
    <div className="page-header-success">

        <SimpleResponse
        loc="/assets/images/greenTick.png"
        msg="SUCCESS!"
        />

        <span className="page-success-msg">OTP Verified Successfully</span>
        <span className="page-success-msg2">Click Continue to reset your password</span>
        
        <div className="page-success-btn-container">
        <Button
        submit={handleSubmit}
        type="Continue" 
        color="#20AE5C"/>
        </div>
    </div>
    );
}

export default SuccessOtpPage;


