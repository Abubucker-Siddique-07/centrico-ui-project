import React, {useState} from 'react';
import "./MobileVerificationPage.css";
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import InputOtp from '../../components/InputOtp/InputOtp';
import {useNavigate} from 'react-router-dom';



const MobileVerificationPage = () => {

    const [mobileCode, setMobileCode] = useState('');
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const mockCode="9";
    const codePattern="[0-9]";



    const handleValue = (e)=>{
        const value = e.target.value;
        setMobileCode(value);
        setError("");
        const regex = new RegExp(codePattern);
        if (!regex.test(value)) {
          setError("Please enter a valid code");
        } else {
          setError("");
        }
    };    

    const handleSubmit = () => {
        if (mobileCode.trim()!=mockCode){
            navigate("/forgotPass/mobileVerify/otp/authorize/failure");
          }else {
            navigate("/forgotPass/mobileVerify/otp/authorize/success");
          }
        };   

    return(
<div>
        <div className="input-box">
            <div className="mobile-verification-input-wrapper">

                {error && <div className="error-message" >{error}</div>}


                <PageTitle
                title="Approve Request" 
                weight="700"
                description="Open Your Mobile And Enter the Number Shown to Reset the password"
                />

                <InputOtp 
                count="1"
                handleValue={handleValue}
                />

                <div className="resendLink">
                    <span><a href="">Resend code</a></span>
                </div>


                <Button 
                type="Submit"
                submit={handleSubmit}
                />                
            </div>
        </div>
</div>
    );
}

export default MobileVerificationPage;