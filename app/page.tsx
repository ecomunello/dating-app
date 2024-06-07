'use server'
import React from "react";
import Input from "@/components/input";
import SelectInput from "@/components/SelectInput";
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import {User, getUsers} from "./api/supabase"

export default async function Home() {
  const users: User[]  = await getUsers()
  
  async function loginUser(formData: FormData) {
    'use server'
 
    const rawFormData = {
      userId: formData.get('userId'),
    }

    revalidatePath(`/dating`)
    redirect(`/dating/${rawFormData.userId}`)
 
  }

  return (
    <section className="flex flex-col items-center justify-center gap-2 py-10">
      
      <div className="inline-block max-w-lg text-center justify-center py-10">
        <h1 className="text-3xl">Conosci nuovi </h1>
        <h1 className="text-5xl text-secondary">
           Amici
        </h1>
      </div>

      <div className="flex gap-1 items-center py-3">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="./fruits/lemon.png" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-32 rounded-full">
            <img src="./logo-app.png" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="./animal/dog-2.png" />
          </div>
        </div>
      </div>
      
      <div className="flex gap-1 items-center py-5">
        <form action={loginUser} className="grid grid-flow-row-dense">
          <p className="text-xl">Dati Partecipante</p>
          <SelectInput items={users} label="Seleziona il tuo utente" id="userId"/>
          <Input type="password" label="Codice Accesso" value="1234" placeholder="Inserisci la tua password" />
          <Input type="text" label="Contatto IG" value="@profiloig" placeholder="Inserisci il tuo profilo IG" />
          <button type="submit" className="btn btn-wide bg-slate-800 text-white">Inizia a giocare</button>
        </form>
      </div>

    </section>
  );
}
