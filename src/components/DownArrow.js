import React from "react";
import "../style/DownArrow.css"

const DownArrow = (props) => {
    return (
        <img
            alt="shadow-drop"
            style={{
                filter: `${props.isInvert ? "invert(100%)" : "none"}`
            }}
            className="shadow-drop-2-top"
            src={props.icon} width="30px" />
    )
}


export default DownArrow
