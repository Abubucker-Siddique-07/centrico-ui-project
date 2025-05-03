import {React, useState} from 'react';
import "./NewPassPage.css";
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import InputSelect from '../../containers/InputSelect/InputSelect';
import { useUser } from '../../context/UserContext/UserContext';
import {useNavigate} from 'react-router-dom';



const NewPassPage = () => {

    const [error, setError] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");


    const navigate = useNavigate();

    const { setUserCreds } = useUser();    

    const passMsg = "Password must be atleasr 6 characters and contain at least one letter and one number.";    

    const [src1, setSrc1] = useState("/assets/images/greyLock.png");
    const [src2, setSrc2] = useState("/assets/images/greyLock.png");

    const passHandleInvalid = (e) => {
        e.preventDefault();
        setError(passMsg);
    };    

    const handleSubmitClick = () => {
        if (pass1.trim() && pass2.trim() && pass1.trim() === pass2.trim() && !error) {
            setUserCreds(prev =>({ ...prev, password: pass2.trim() }));
            navigate("/forgotPass/passwordReset/reset/success");
          } else {
            setError('The confirm pass is not the same');
          }
        };
      
    const passHandleChange = (id, e) => {
        const value = e.target.value;
        if (value.length < 6) {
            setError("Password must be at least 6 characters long.");
        } else if (!/[a-zA-Z]/.test(value)) {
            setError("Password must contain at least one letter.");
        } else if (!/\d/.test(value)) {
            setError("Password must contain at least one number.");
        }else {
            setError("");
        }

        if(id==1){
            setPass1(value);
            setError("");
        }else  if(id==2){
            setPass2(value);
        }
      };      

    const handleIcon = (id,e)=>{
        if(e.type === 'focus'){
            if (id === 1) {
                setSrc1("/assets/images/blueLock.png");
            } else if (id === 2) {
                setSrc2("/assets/images/blueLock.png");
            }
        } else if(e.type === 'blur'){
            if (id === 1) {
                setSrc1("/assets/images/greyLock.png");
            } else if (id === 2) {
                setSrc2("/assets/images/greyLock.png");
            }
        }
    };


    return(
<div>
        <div className="newInput-box">
            <div className="newInput-wrapper">
                <br></br>

                {error && <div className="error-message" >{error}</div>}


                <PageTitle 
                title="Create New Password" 
                weight="700"
                description="Your password must be different from previous used password"
                />
                
                <InputSelect loc={src1} 
                imgSize="25"
                keyName="your Password"
                type="password"
                handleIcon={(e)=>handleIcon(1,e)}
                handleChange={(e)=>passHandleChange(1,e)}
                />

                <InputSelect loc={src2} 
                imgSize="25"
                keyName="Confirm Password"
                type="password"
                handleIcon={(e)=>handleIcon(2,e)}
                handleChange={(e)=>passHandleChange(2,e)}
                />                

                <br></br>
                <Button 
                submit={handleSubmitClick}
                type="Reset"/>
            </div>
        </div>
</div>
    );
}

export default NewPassPage;