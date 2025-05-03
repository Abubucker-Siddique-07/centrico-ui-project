import React, {useState} from 'react';
import "./ResetPassPage.css";
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import InputSelect from '../../containers/InputSelect/InputSelect';
import { useUser } from '../../context/UserContext/UserContext';
import {useNavigate} from 'react-router-dom';




const ResetPassPage = () => {

    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState("");

    const { setUserCreds } = useUser(); 
    const navigate = useNavigate();



    const emailPattern = "^[^\s@]+@[^\s@]+\.[^\s@]+$";
    const mockMail = "sid99@gmail.com"

    const handleValue = (e)=>{
        const value = e.target.value;
        setUserEmail(value);
        setError("");
        const regex = new RegExp(emailPattern);
        if (!regex.test(value)) {
          setError("Please enter a valid email...");
        } else {
          setError("");
        }
    };

    const handleSubmit = () => {
        if (userEmail.trim()!==mockMail){
            setError('The Entered Mail does not match...');
          }else {
            setError("");
            setUserCreds(prev=>({ ...prev, email: userEmail.trim() }));
            navigate("/forgotPass/emailVerify/otp/authorize");
          }
        };    


    return(
<div>
        <div className="input-box">
            <div className="input-wrapper">

                {error && <div className="error-message" >{error}</div>}

                <PageTitle 
                title="Reset Password" 
                weight="700"
                description="Enter your email, we will send a verification code to your email"
                />

                <InputSelect loc="/assets/images/mail1.png" 
                imgSize="25"
                keyName="Your Email"
                type="text"
                handleChange={handleValue}
                />

                <br></br>
                <Button 
                type="Send OTP"
                submit={handleSubmit}
                />
            </div>
        </div>
</div>
    );
}

export default ResetPassPage;