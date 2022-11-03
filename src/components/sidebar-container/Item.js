import React from "react";

export const Item = (props) =>{


    return(
        <div className="item">
            <div className="icon">{props.icon}</div>
            <span className="text nav-text">
                {props.name}
            </span>
        </div>
    )
}
export default Item;