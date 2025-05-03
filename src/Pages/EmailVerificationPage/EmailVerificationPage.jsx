import React, {useState} from 'react';
import "./EmailVerificationPage.css";
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import InputOtp from '../../components/InputOtp/InputOtp';
import { useUser } from '../../context/UserContext/UserContext';
import {useNavigate} from 'react-router-dom';


const EmailVerificationPage = () => {

    const [emailCode, setEmailCode] = useState('');
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const mockCode="9"; //give all digits 9
    const codePattern="[0-9]";



    const handleValue = (e)=>{
        const value = e.target.value;
        setEmailCode(value);
        setError("");
        const regex = new RegExp(codePattern);
        if (!regex.test(value)) {
          setError("Please enter a valid code");
        } else {
          setError("");
        }
    };    

    const handleSubmit = () => {
        if (emailCode.trim()!=mockCode){
            navigate("/forgotPass/emailVerify/otp/authorize/failure");
          }else {
            navigate("/forgotPass/emailVerify/otp/authorize/success");
          }
        };   

    return(
<div>
        <div className="input-box">
            <div className="email-verification-input-wrapper">

                {error && <div className="error-message" >{error}</div>}    

                <PageTitle
                title="Verification Code" 
                weight="700"
                description="Enter the verification code that we have sent to your Email"
                />

                <InputOtp 
                handleValue={handleValue}
                count="4"/>

                <div className="resendLink">
                    <span><a href="">Resend code</a></span>
                </div>


                <Button 
                submit={handleSubmit}
                type="Submit"/>                
            </div>
        </div>
</div>
    );
}

export default EmailVerificationPage;