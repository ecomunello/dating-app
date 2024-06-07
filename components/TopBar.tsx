import React from "react";

interface Props {
    title: string
  }

const TopBar = (props: Props) =>{
    
  return (
      <div className="mt-2">
            <h1 className="text-2xl text-pink-600 text-center">{props.title}</h1>
      </div>
  )
}

export default TopBar 


