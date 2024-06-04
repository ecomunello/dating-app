import { list } from "postcss";
import React from "react";

interface Props {
    src: string
    type: string
  }

const Avatar = (props: Props) =>{
    var classes = "w-6 h-6 text-tiny opacity-20";
    if (props.type == "active"){
        classes = "w-32 h-32 text-large"
    } else if (props.type == "secondary"){
        classes = "w-20 h-20 text-tiny opacity-45"
    }
    
    return (
        <div className="avatar">
            <div className={"rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 " + classes}>
                <img src={props.src} />
            </div>
        </div>
    )
}

export default Avatar 

