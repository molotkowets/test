import React from "react"
import "./shows.css"

function Shows(props) {
    return(
        <div className="shows">
            {props.children}
        </div>
    )
}
export default Shows;