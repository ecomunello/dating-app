'use client'
import React from "react";

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
    <div className="card card-side bg-slate-800 text-white shadow-xl items-center">
    <figure><img className="w-16 p-2 ml-2 rounded" src={props.src} alt="Movie"/></figure>
    <div className="card-body p-3 items-center">
      <p className="card-title text-sm">{props.name}</p>
      <div className="card-actions">
        <button onClick={()=>openModal()} className="btn btn-xs btn-outline btn-secondary">Contatto</button>
        <dialog id={props.name} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Il suo contatto!</h3>
            <p className="py-4">Questo è il contatto di {props.name}, mi raccomando usalo in maniera rispettosa!</p>
            <a type="button" href="https://www.instagram.com/nomeprofiloIG/" className="btn btn-primary btn-outline btn-wide">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              {props.contact}
            </a>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Chiudi</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  </div>
  )
}

export default MatchBox 

