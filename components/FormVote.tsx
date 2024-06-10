'use client'
import React from "react";
import RangeBar from "@/components/RangeBar";
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { updateDate, updateDateSkip } from "../api/supabase"

interface Props {
    idUser: number
    idDate: number
}

const FormVote = (props: Props) =>{
    const router = useRouter()

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
    
        const formData = new FormData(event.currentTarget)
        const vote_attractive: number = Number(formData.get("vote-attractive"));
        const vote_interaction: number =  Number(formData.get("vote-interaction"));
        const vote_interest: number =  Number(formData.get("vote-interest"));
        const avg_vote = (vote_attractive + vote_interaction + vote_interest)/3

        updateDate(
            vote_attractive, 
            vote_interaction,
            vote_interest,
            avg_vote,
            props.idUser,
            props.idDate
          )

        router.push ('/dating/' + props.idUser +"?voted="+props.idDate)
    }

    async function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        
        updateDateSkip(
            props.idUser,
            props.idDate
        )

        router.push('/dating/' + props.idUser +"?skip="+props.idDate)
    }
  
  return (
    <div>
        <form id="formVote" onSubmit={onSubmit}>
            <RangeBar id="vote-attractive" label="Attratività" message="Quanto era bello, attraente nel fisico e nello stile"/>
            <RangeBar id="vote-interaction" label="Interazioni" message="Quanto è stato facile interagirci"/>
            <RangeBar id="vote-interest" label="Interessi Comuni" message="Quanto avevate in comune"/>
        </form>
        <div className="grid grid-cols-2 gap-4 items-center">
            <div>
                <button form="formVote" type="submit" className="btn btn-block btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    Vota
                </button>
            </div>
            <div>
                <button type='button' onClick={(event) => onClick(event)} className="btn btn-outline btn-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    Scarta
                </button>
            </div>
        </div>
    </div>
  )
}

export default FormVote 