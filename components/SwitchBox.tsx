'use client'
import React from "react";

interface Props {
    message: string
    title: string
  }

const SwitchBox = (props: Props) =>{
    
  return (
    <div className="form-control w-52 border-solid border-2 border-grey-100 p-2">
        <h3 className="font-bold text-2xl">{props.title}</h3>
        <label className="cursor-pointer label">
          <span className="label-text">{props.message}</span> 
          <input type="checkbox" className="toggle toggle-primary" />
        </label>
      </div>
  )
}

export default SwitchBox 

