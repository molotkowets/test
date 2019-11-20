import React from "react";
import "./headline.css";



function Headline(props){
    return(
        <div className="headlBox">
           <h2>{props.children}</h2>
        </div>
    )
};

export default Headline;