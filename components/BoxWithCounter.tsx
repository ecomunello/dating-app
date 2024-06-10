'use client'
import React from "react";

interface Props {
    name: string
  }

const BoxWithCounter = (props: Props) =>{
    
  return (
    <div role="alert" className="alert p-1 bg-slate-800 text-white">
    <p>
    <span>Incontrati con </span> 
    <span className="text-l font-bold uppercase">{props.name}</span>
    </p>
    </div>
    
  )
}

export default BoxWithCounter 




