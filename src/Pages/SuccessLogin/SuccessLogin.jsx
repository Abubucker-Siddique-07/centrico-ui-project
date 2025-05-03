import React, {useState} from 'react';
import "./SuccessLogin.css";
import UserInput from '../../components/Input/UserInput';
import PageTitle from '../../components/PageTitle/PageTitle'
import InputCheckbox from '../../components/InputCheckBox/InputCheckbox'
import Button from '../../components/Button/Button'
import { useUser } from '../../context/UserContext/UserContext';




const SuccessLogin = () => {

    const { userCreds  } = useUser();    

    return(
<div>
            <div className="input-box">
            <div className="input-wrapper">

                <PageTitle 
                title={`Hello  ${userCreds.username} !`}
                weight="700"
                description="Have a happy day today and enjoy the weekend!"
                />  
                
            </div>
            </div>
</div>
    );
}

export default SuccessLogin;