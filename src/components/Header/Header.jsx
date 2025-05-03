import React,{useId} from 'react';
import "./Header.css";

const Header = ({loc}) =>{

    const imgId = "Centrico-".concat(useId());

    return(
        <div className="headerLayout">
            <div className="img-wrapper">
                <img 
                alt="Centrico logo" 
                id={imgId}
                src={loc}>
                </img>
            </div>
        </div>
    );
}

export default Header;