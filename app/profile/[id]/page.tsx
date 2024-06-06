import { headers } from 'next/headers';
import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import SwitchBox from "@/components/SwitchBox";

class User {
  id: number
  name: string
  src: string
  gender: string

  public constructor(id: number, name: string, src: string, gender: string) {
    this.id = id;
    this.name = name;
    this.src = src;
    this.gender = gender;
  }

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

export default async function DatingPage({ params }: { params: { id: number } }) {
  revalidatePath('/dating/[id]', 'page')

  const users: User[]  = await getUsers()
  const profile: User | undefined  = users.find(x => x.id == params.id)

  if (profile === undefined ) {
    revalidatePath('/error') // Update cached posts
    redirect(`/error`) // Navigate to the new post page
  } else return (
    <section className="flex flex-col items-center justify-center gap-4 py-8">
      
      <div className="inline-block max-w-lg text-center justify-center">
        <p className="text-3xl">Profilo</p>
        <p className="text-2xl text-pink-600">
          Personale
        </p>
      </div>

      <div className="card w-auto bg-slate-800 text-white shadow-xl">
        <figure><img className="w-40 mt-8 rounded" src={profile.src} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-center">{profile.name} - @contattoIG</h2>
          <SwitchBox 
          message="Se lo disattivi il tuo contatto non sarà condiviso con i tuoi 5 migliori match"
          title ="Gestione Contatto" 
          isChecked={true}
          />
        </div>
      </div>

    </section>
  );
}
