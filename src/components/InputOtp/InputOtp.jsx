import React , {useRef, useState} from 'react';
import "./InputOtp.css";

const InputOtp = ({count, handleValue}) => {

    const inputRefs = useRef([]);
    const inputs = [];
    const [finalValue, setFinalValue] = useState("");

    const handleChange = (e, index) => {
        const { value, maxLength } = e.target;
        // setFinalValue((prev) =>{ if(prev && value) prev.concat(value)});
        handleValue(e);
        if (value.length === maxLength && index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1].focus();
        }
      }

      const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
          inputRefs.current[index - 1].focus();
        }
      };      

    for (let i = 0; i < count; i++) {
        inputs.push(
          <input
            key={i}
            id={`otp-${i}`}
            type="text"
            maxLength={1}
            ref={(el) => (inputRefs.current[i] = el)}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className="otp-input-box"
          />
        );
    }

    return (
    <div className="form-group">
        <div className="otp-pin-wrap">
            {inputs}
        </div>
    </div>
    );
}

InputOtp.defaultProps = {
    type: 'text',
  };


export default InputOtp;