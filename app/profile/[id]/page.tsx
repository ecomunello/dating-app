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
    <section className="flex flex-wrap gap-4 py-8 items-center justify-center ">
      <div className="card w-auto bg-slate-800 text-white shadow-xl">
        <div className="card-body">
          <figure><img className="w-40 mt-8 rounded" src={profile.src} alt="Shoes" /></figure>
          <h1 className="text-3xl font-bold text-center">{profile.name}</h1>
        </div>
      </div>
      <p className="text-center">
        <span >Contatto: </span><span className="font-bold">@nomeprofiloIG</span>
      </p>
      <SwitchBox 
          message="Se lo disattivi il tuo contatto non sarà condiviso con nessuno"
          title ="Gestione Contatto" 
          isChecked={true}
          />

    </section>
  );
}
