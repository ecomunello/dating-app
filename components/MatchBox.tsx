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
    <div onClick={()=>openModal()} className="indicator flex flex-col m-2 p-4 bg-slate-800 text-white shadow-xl rounded-lg items-center">
      <p className="card-title text-sm mb-2">{props.name}</p>
      <img className="w-full max-w-16 rounded mb-2" src={props.src} alt="Movie"/>
      <ChatIcon className="text-xl" />
      
        
      <dialog id={props.name} className="modal">
          <div className="modal-box text-black">
            <h3 className="font-bold text-lg py-4">Il suo contatto!</h3>
            <p>Questo è il contatto di <span className="font-bold"> {props.name}</span></p>
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

