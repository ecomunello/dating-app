'use server'
import React from "react";
import Input from "@/components/input";
import SelectInput from "@/components/SelectInput";
import { createClient } from '@supabase/supabase-js'
import { FormEvent } from 'react'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

interface User {
  id: string
  name: string
  src: string
  gender: string
}

async function getUsers() {
  const supabase = createClient(
    'https://dnwzvsbmjnrqkgpohllv.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRud3p2c2Jtam5ycWtncG9obGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MTYzNTQsImV4cCI6MjAzMzA5MjM1NH0.Risknq8ShXrJYzMOG4QOU9D8DXhX9nbnuytcMyAeYT0'
  )

  let { data: users, error } = await supabase
  .from('users')
  .select().returns<User[]>()

  if (users == null) return []
  else return users
}

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
          <button type="submit" className="btn btn-wide btn-primary">Inizia a giocare</button>
        </form>
      </div>

    </section>
  );
}
