import React, {useId} from 'react';
import "./InputCheckbox.css";

const InputCheckbox = ({label}) => {

    const checkboxId = "rememberMe-".concat(useId());

    return (
        <div className="checkboxLayout">
            <label 
            htmlFor={checkboxId}
            className="checkboxLabel">

            <input 
            type="checkbox" 
            className="form-check-input me-2 customCheckbox" 
            id={checkboxId} ></input>
            {label}
            </label>
        </div>
    );
}

export default InputCheckbox;