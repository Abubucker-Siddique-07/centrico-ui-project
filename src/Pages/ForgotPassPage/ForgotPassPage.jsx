import {React} from 'react';
import "./ForgotPassPage.css";
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import InputSelect from '../../containers/InputSelect/InputSelect';



const ForgotPassPage = () => {
    return(
<div>
        <div className="input-box">
            <div className="input-wrapper">
                <br></br>
                <PageTitle 
                title="Forgot Password" 
                weight="700"
                description="Select with contact details should we use to reset yout password"
                />

                <br></br>

                <InputSelect loc="/assets/images/mail.png" 
                keyName="Email" 
                value="****@gmail.com"
                type="button"
                />
                <InputSelect loc="/assets/images/phone.png"
                 keyName="Phone"
                 value="**** **** 2345"
                 type = "button"
                 />

                <br></br>
                <Button type="Continue"/>
            </div>
        </div>
</div>
    );
}

export default ForgotPassPage;