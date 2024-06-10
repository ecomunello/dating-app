import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import SwitchBox from "@/components/SwitchBox";
import {User, getUsers} from "../../../api/supabase"

export default async function DatingPage({ params }: { params: { id: number } }) {
  revalidatePath('/dating/[id]', 'page')

  const users: User[]  = await getUsers()
  const profile: User | undefined  = users.find(x => x.id == params.id)

  if (profile === undefined ) {
    revalidatePath('/error') // Update cached posts
    redirect(`/error?message="Errore 1: dati undefined"`) // Navigate to the new post page
  } else return (
    <section className="flex flex-col items-center justify-center gap-4 py-8">
      
      <div className="inline-block max-w-lg text-center justify-center">
        <p className="text-3xl">Profilo</p>
        <p className="text-2xl text-pink-600">
          di
        </p>
      </div>
      <h1 className="card-title text-center text-5xl">{profile.name}</h1>
      <div className="card w-auto bg-slate-800 text-white shadow-xl">
        <figure><img className="w-40 mt-8 rounded" src={profile.src} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-center">@nomeprofiloIG</h2>
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
