import React, {useId} from 'react';
import "./Button.css";

const Button = ({type, color, submit}) =>{

    const buttonId = useId();
    
    return(
        <div className="buttonLayout">
            <button type="button"
                id={buttonId}
                onClick={submit}
                className="btn btn-primary btn-sm custom-btn"
                style={{background: color}}>
                    {type}  
            </button>
        </div>
    );
}

export default Button;