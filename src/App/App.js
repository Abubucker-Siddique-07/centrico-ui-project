import {React} from 'react';
import "./App.css"
import LoginPage from '../Pages/LoginPage/LoginPage';
import ForgotPassPage from '../Pages/ForgotPassPage/ForgotPassPage';
import Header from '../components/Header/Header';
import ResetPassPage from '../Pages/ResetPassPage/ResetPassPage';
import ResetPassPageMobile from '../Pages/ResetPassPageMobile/ResetPassPageMobile';
import EmailVerificationPage from '../Pages/EmailVerificationPage/EmailVerificationPage'
import MobileVerificationPage from '../Pages/MobileVerificationPage/MobileVerificationPage';
import SuccessOtpPage from '../Pages/SuccessOtpPage/SuccessOtpPage';
import NewPassPage from '../Pages/NewPassPage/NewPassPage'
import SuccessResetPage from '../Pages/SuccessResetPage/SuccessResetPage'
import FailureOtpPage from '../Pages/FailureOtpPage/FailureOtpPage';
import FailureResetPage from '../Pages/FailureResetPage/FailureResetPage'
import { useUser } from '../context/UserContext/UserContext';
import SuccessLogin from '../Pages/SuccessLogin/SuccessLogin';
import {BrowserRouter, Routes, Route, Navigate, replace} from 'react-router-dom';



const App = () => {   
     
    const { userCreds  } = useUser();    

    return (
        <div className="App">
            <div className="headerBody">
                <Header loc="/assets/images/centrico_logo.png"/>
            </div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/home" element={userCreds.username ? <SuccessLogin/> : <Navigate to="/login" replace/>}/>
                        <Route path="/forgotPass" element={<ForgotPassPage/>}/>
                        <Route path="/forgotPass/emailVerify" element={<ResetPassPage/>}/>
                        <Route path="/forgotPass/mobileVerify" element={<ResetPassPageMobile/>}/>
                        <Route path="/forgotPass/mobileVerify/otp/authorize" element={<MobileVerificationPage/>}/>
                        <Route path="/forgotPass/emailVerify/otp/authorize" element={<EmailVerificationPage/>}/>
                        <Route path="/forgotPass/mobileVerify/otp/authorize/success"element={<SuccessOtpPage/>}/>
                        <Route path="/forgotPass/emailVerify/otp/authorize/success"element={<SuccessOtpPage/>}/>
                        <Route path="/forgotPass/emailVerify/otp/authorize/failure" element={<FailureOtpPage/>}/>
                        <Route path="/forgotPass/mobileVerify/otp/authorize/failure" element={<FailureOtpPage/>}/>
                        <Route path="/forgotPass/passwordReset" element={<NewPassPage/>}/>
                        <Route path="/forgotPass/passwordReset/reset/success" element={<SuccessResetPage/>}/>
                        <Route path="/forgotPass/passwordReset/reset/failure" element={<FailureResetPage/>}/>
                        <Route path="*" element={<Navigate to="/login" replace/>} />

                    </Routes>
                </BrowserRouter>
        </div>

    );
}

export default App;