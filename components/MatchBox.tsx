'use client'
import React from "react";
import {ChatIcon} from "@/components/icon/ChatIcon";
interface Props {
  name: string
  src: string
  contact: string
}

const MatchBox = (props: Props) =>{

  function openModal(){
    if (document) {
      (document.getElementById(props.name) as HTMLFormElement).showModal();
    }
  }
    
  return (
    <div onClick={()=>openModal()} className="flex flex-col m-2 p-4 bg-slate-800 text-white shadow-xl rounded-lg items-center">
      <ChatIcon className="text-3xl mb-2" />
      <img className="w-full max-w-16 mb-2 rounded" src={props.src} alt="Movie"/>
      <p className="card-title text-sm">{props.name}</p>
      
        
      <dialog id={props.name} className="modal">
          <div className="modal-box text-black">
            <h3 className="font-bold text-lg py-4">Il suo contatto!</h3>
            <p>Questo è il contatto di {props.name}</p>
            <p className="py-1">mi raccomando usalo in maniera rispettosa!</p>
            <a href={"https://www.instagram.com/" + props.contact} className="link link-primary">
              {props.contact}
            </a>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Chiudi</button>
              </form>
            </div>
          </div>
        </dialog>
    </div>
  )
}

export default MatchBox 

