'use client'
import React from "react";

interface Props {
    name: string
  }

function setCounter(){
    let counter = 320;

    setInterval(() => {
        if(counter>0){
            counter--
        }
        if (document) {
            const minutes = Math.floor(counter / 60);
            const seconds = counter - (minutes*60)

            var node = document.getElementById("counterElementMin")
            var nodeSec = document.getElementById("counterElementSec")
            if (node && nodeSec){
                node.innerText = String(minutes)
                nodeSec.innerText = String(minutes)
            }
        }
    }, 500)
}

const BoxWithCounter = (props: Props) =>{
    
  return (
    <div role="alert" className="alert p-1 bg-slate-800 text-white">
    <p>
    <span>Hai ancora </span> 
    <span className="text-l font-bold uppercase" id="counterElementMin">4</span> 
    <span>:</span> 
    <span className="text-l font-bold uppercase" id="counterElementSec">59</span> 
    <span> min con </span> 
    <span className="text-l font-bold uppercase">{props.name}</span>
    </p>
    <input className="hidden" onLoad={() => setCounter()} />
    </div>
    
  )
}

export default BoxWithCounter 




