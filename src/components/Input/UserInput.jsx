import React, {useRef, useMemo, useState} from 'react';
import "./UserInput.css";

const UserInput = ({label, type, size, pattern, handleIcon, handleInvalid, handleChange, handleClick, error}) => {

    const [username, setUsername] = useState("");

    const formatPlaceholder = (s) =>{
        return "Enter ".concat(s.toLowerCase());
    }

    const inputRef = useRef();
    const inputId =  useMemo(() => `input-${label.toLowerCase().replace(/\s+/g, '-')}`, [label]);
    const dynamicClass = `form-control customInput ${size === 'lg' ? 'customInput-button' : ''} input-${inputId}`;

    const handleFocus = (e) => {
        if (handleIcon) handleIcon(e);
      };

    return (
    <div className="form-group">

        {size !== "lg" ? <label 
        htmlFor={inputId} 
        className="mb-2 customLabel">
        {label}
        </label> : <></>}

        <input
        ref={inputRef}
        type={type} 
        className={dynamicClass}
        pattern={pattern}
        id={inputId}
        placeholder={label && formatPlaceholder(label)}
        onFocus={(e) => handleFocus(e)}
        onBlur={(e)=> handleFocus(e)}
        onChange={(e)=>handleChange && handleChange(e)}
        onInvalid={(e)=>handleInvalid && handleInvalid(e)}
        onClick={(e)=>handleClick && handleClick(e)}
         />
        {error && <div className="error-message" >{error}</div>}
    </div>
    );
}

UserInput.defaultProps = {
    type: 'text',
  };


export default UserInput;