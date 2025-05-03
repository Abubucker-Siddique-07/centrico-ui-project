import React, {useId} from 'react';
import "./InputSelect.css";
import UserInput from '../../components/Input/UserInput';
import {useNavigate} from 'react-router-dom';



const InputSelect = ({loc, imgSize, keyName, value, type, handleIcon, handleChange}) => {

    const imgId = useId();
    const spanKeyId = useId();
    const spanValId = useId();

    const navigate = useNavigate();

    const handleClick = () => {
        if(type==="button" && keyName==="Email"){
            navigate("/forgotPass/emailVerify");
        }
        else if (type==="button" && keyName==="Phone"){
            navigate("/forgotPass/mobileVerify");
        }
    };
    

    return (
    <div className="form-group">
        <div className="inputSelect-wrapper">
            
            
            <img 
            id={imgId}
            src={loc} 
            alt="icon" 
            className={`input-icon img-${imgSize}`}
            />
            
            {value ?
            <>
            <span
            id={spanKeyId}
            className="input-text">
                {keyName}
            </span>
            <span 
            id={spanValId}
            className="input-text text2">
                {value}
            </span>
            </> : 
            <></>}
            
            <UserInput 
            type={type} 
            size="lg" 
            label={keyName}
            handleIcon={handleIcon}
            handleClick={handleClick}
            handleChange={handleChange}
            />
        </div>
    </div>
    );
}

export default InputSelect;