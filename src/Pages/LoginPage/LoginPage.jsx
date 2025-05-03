import React, {useState, useEffect} from 'react';
import "./LoginPage.css";
import UserInput from '../../components/Input/UserInput';
import PageTitle from '../../components/PageTitle/PageTitle'
import InputCheckbox from '../../components/InputCheckBox/InputCheckbox'
import Button from '../../components/Button/Button'
import { useUser } from '../../context/UserContext/UserContext';
import {useNavigate} from 'react-router-dom';





const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState("");
    const [passError, setPassError] = useState("");
    const [comError, setComError] = useState("");

    const navigate = useNavigate();

    const { userCreds, setUserCreds } = useUser();    

    const msg = "Username must be 4-20 characters and can include letters, numbers, and underscores.";
    const passMsg = "Password must be atleasr 6 characters and contain at least one letter and one number.";    
    const pattern = "^[a-zA-Z0-9_]{4,20}$";
    const passwordRegex = "^(?=.*[a-zA-Z])(?=.*\d).{6,}$";
    const mockPass = "abc123";

    // useEffect(() => {
    //     const stored = JSON.parse(localStorage.getItem('userCreds'));
    //     if (stored) {
    //       setUserCreds(stored);
    //     }
    //   }, []);


    const handleChange = (e) => {
        const value = e.target.value;
        setUsername(value);
        setComError("");
        const regex = new RegExp(pattern);
        if (!regex.test(value)) {
          setError(msg);
        } else {
          setError("");
        }
      };

    const handleInvalid = (e) => {
        e.preventDefault();
        setError(msg);
    };

    const passHandleInvalid = (e) => {
        e.preventDefault();
        setPassError(passMsg);
    };    

    const handleLoginClick = () => {
        if (username.trim() && password.trim()===mockPass && !error && !passError && !comError) {
            setUserCreds(prev =>({ ...prev, username: username.trim(), password: password.trim() }));
            navigate("/home");
          } else if (!username.trim() && !password.trim()){
            setComError('Please fill out both fields following the rules');
          } else if (password.trim()!==mockPass){
            setComError('Password did not match...');
          }
        //   setUserCreds(prev =>({ ...prev, username: username.trim()}));
        };


    const handleForgetPassClick = () => {
            // setUserCreds(username , username.trim());
        };        
      
    const passHandleChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setComError("");
        if (value.length < 6) {
            setPassError("Password must be at least 6 characters long.");
        } else if (!/[a-zA-Z]/.test(value)) {
            setPassError("Password must contain at least one letter.");
        } else if (!/\d/.test(value)) {
            setPassError("Password must contain at least one number.");
        }else {
            setPassError("");
        }
      };      
    
    return(
<div>
            <div className="input-box">
            <div className="input-wrapper">

                {comError && <div className="error-message" >{comError}</div>}
                {/* {loginError && <div className="error-message" >{loginError}</div>} */}

                <PageTitle
                title="Login Page"
                />
                
                <UserInput 
                label="Username"
                pattern={pattern}
                handleChange={handleChange}
                handleInvalid={handleInvalid}
                error={error}
                />

                <UserInput 
                label="Password"
                type="password"
                pattern={passwordRegex}
                handleChange={passHandleChange}
                handleInvalid={passHandleInvalid}
                error={passError}
                />

                <div className="checkbox-wrapper">
                    <InputCheckbox label="Remember me"/>
                </div>

                <div className="forgotLink">
                    <span><a onClick={handleForgetPassClick} href='/forgotPass'>Forgot Password?</a></span>
                </div>
                
                <Button
                submit={handleLoginClick}
                type="Login"/>
            </div>
            </div>
</div>
    );
}

export default LoginPage;