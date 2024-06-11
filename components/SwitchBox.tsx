'use client'
import React from "react";

interface Props {
    message: string
    title: string
    isChecked: boolean
  }

const SwitchBox = (props: Props) =>{
    
  return (
    <div className="form-control border-solid mt-2 border-2 border-secondary p-2 ">
        <h3 className="font-bold" >{props.title}</h3>
        <label className="cursor-pointer label">
          <span className="label-text ">{props.message}</span> 
          <input type="checkbox" className="toggle toggle-secondary" defaultChecked />
        </label>
      </div>
  )
}

export default SwitchBox 

