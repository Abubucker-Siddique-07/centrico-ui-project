import React, {useState} from 'react';
import "./ResetPassPageMobile.css";
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import InputSelect from '../../containers/InputSelect/InputSelect';
import { useUser } from '../../context/UserContext/UserContext';
import {useNavigate} from 'react-router-dom';


const ResetPassPageMobile = () => {

    const [userMobile, setUserMobile] = useState('');
    const [error, setError] = useState("");

    const { setUserCreds } = useUser(); 
    const navigate = useNavigate();



    const mobilePattern = "^[6-9]\d{9}$";
    const mockMobile = "9003636602"

    const handleValue = (e)=>{
        const value = e.target.value;
        setUserMobile(value);
        setError("");
        const regex = new RegExp(mobilePattern);
        if (!regex.test(value)) {
          setError("Please enter a valid mobile number..");
        } else {
          setError("");
        }
    };

    const handleSubmit = () => {
        if (userMobile.trim()!==mockMobile){
            setError('The Entered mobile num does not match...');
          }else {
            setError("");
            setUserCreds(prev=>({ ...prev, mobile: userMobile.trim() }));
            navigate("/forgotPass/mobileVerify/otp/authorize");
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
                description="Enter your phone number, we will send a verification code to your mobile"
                />

                <InputSelect loc="/assets/images/phone1.png" 
                imgSize="25"
                keyName="Your Mobile"
                type="text"
                handleChange={handleValue}
                />

                <br></br>
                <Button
                submit={handleSubmit}
                type="Send OTP"/>
            </div>
        </div>
</div>
    );
}

export default ResetPassPageMobile;