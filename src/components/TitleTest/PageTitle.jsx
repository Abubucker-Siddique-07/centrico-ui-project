import {React} from 'react';
import "./PageTitle.css";

const PageTitle = (props) =>{

    return(
        <div 
        className={`spanLayout ${props.weight && 'spanLayout-center'}`}>
            <label 
            className={`customSpan font-${props.weight}`}>
            {props.title}
            </label>
            
            {props.description && 
            <textarea 
            cols="50"
            placeholder={props.description}>
            </textarea>}

        </div>
    );
}

export default PageTitle;