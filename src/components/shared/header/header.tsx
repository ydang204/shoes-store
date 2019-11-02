import React from "react";
import "./header.scss";
import logo from "./hinh/logo.png";

const Header: React.FC = () => {
    return(
        <div className="header">
            <div>
                <img src={logo} width="" height="100" style={{marginLeft:"50px"}}/>
            </div>
            <div>
                
            </div>
        </div>
    );
};
export default Header;
