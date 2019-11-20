import React from "react";
import "./header.css";
import User from "./svg_user.js";
import Logo from "./svg_test";



const logo = {
    marginLeft: "30px"
}


function Header(){
    return(
        <div className="box">
            <div className="block">
                <a href=""><div className="menu"></div></a>
                <a href=""><Logo style={logo}></Logo></a>
                <a href=""> <User/></a>
               
            </div>
        </div>
    )
};

export default Header