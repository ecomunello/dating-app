import { list } from "postcss";
import React from "react";
import { headers } from 'next/headers';

interface Props {
    src: string
    type: string
  }

const Avatar = (props: Props) =>{
    const headersList = headers();
    const baseUrl = "http://" + headersList.get('host')
    var classes = "w-6 h-6 opacity-20";
    if (props.type == "active"){
        classes = "w-28 h-28 "
    } else if (props.type == "secondary"){
        classes = "w-20 h-20 opacity-45"
    }
    
    return (
        <div className="avatar">
            <div className={"rounded-full ring ring-slate-800 ring-offset-3 " + classes}>
                <img src={baseUrl + props.src} />
            </div>
        </div>
    )
}

export default Avatar 

