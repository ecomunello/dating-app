
'use client'
import React from "react";

interface Props {
    label: string
    message: string
  }

const RangeBar = (props: Props) =>{
    
  return (
    <div className="flex flex-col w-full pb-4">
        <div className="divider p-1 m-2"><span className="font-bold">{props.label}</span></div>
        <p className="text-xs text-gray-700 pb-3">{props.message}</p>
        <input type="range" min={1} max="10" className="range range-secondary range-lg" step="1" />
        <div className="w-full flex justify-between text-xs px-2">
        </div>
    </div>
  )
}

export default RangeBar 

