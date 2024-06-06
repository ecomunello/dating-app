'use client'
import React from "react";

interface Props {
  name: string
  src: string
}

const SpecialMatchBox = (props: Props) =>{

  function openModal(){
    if (document) {
      (document.getElementById(props.name) as HTMLFormElement).showModal();
    }
  }
    
  return (
    <div className="flex flex-col pb-4 items-center">
      <div className="avatar">
        <div className="w-16 rounded-full">
          <img src={props.src} />
        </div>
      </div>
      <p className="card-title text-sm text-center">{props.name}</p>
    </div>
  )
}

export default SpecialMatchBox 

