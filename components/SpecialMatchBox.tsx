'use client'
import React from "react";

interface Props {
  name: string
  src: string
}

const SpecialMatchBox = (props: Props) =>{
    
  return (
    <div className="flex flex-col items-center border-2 bg-gradient-to-r from-amber-300 to-yellow-500 rounded-lg p-2">
      <p className="card-title text-sm text-center">{props.name}</p>
      <div className="avatar">
        <div className="w-16 rounded-full border-2 border-yellow-600">
          <img src={props.src} />
        </div>
      </div>
      
    </div>
  )
}

export default SpecialMatchBox 

