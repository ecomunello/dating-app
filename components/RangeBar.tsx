
'use client'
import React from "react";

interface Props {
    label: string
  }

const RangeBar = (props: Props) =>{
    
  return (
    <div className="flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden p-4">
        <h2 className="font-bold text-2xl">
           {props.label}
        </h2>
        <input type="range" min={1} max="10" className="range range-secondary range-lg" step="1" />
        <div className="w-full flex justify-between text-xs px-2">
        </div>
    </div>
  )
}

export default RangeBar 

