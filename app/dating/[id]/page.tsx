import { headers } from 'next/headers';
import RangeBar from "@/components/RangeBar";
import Avatar from "@/components/Avatar";

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

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
  const actualDate: User | undefined  = users.find(x => x.id == params.id)

  if (actualDate === undefined ) {
    revalidatePath('/error') // Update cached posts
    redirect(`/error`) // Navigate to the new post page
  } else return (
    <section className="flex flex-col items-center justify-center gap-4 py-8">
      
      <div className="inline-block max-w-lg text-center justify-center">
        <p className="text-4xl font-bold pb-3">Dating</p>
        <p className="text-l">Stai per incontrare...</p>
      </div>    

      <div className="flex gap-3 items-center">
        <Avatar src={users[Math.abs(params.id-2)].src} type = "" />
        <Avatar src={users[Math.abs(params.id-1)].src} type = "secondary" />
        <Avatar src={actualDate.src} type = "active" />
        <Avatar src={users[Math.abs(params.id-3)].src} type = "secondary"  />
        <Avatar src={users[Math.abs(params.id-4)].src} type = ""  />
      </div>

      <div role="alert" className="alert p-1">
        <p className="text-l font-bold uppercase">{actualDate.name}</p>
      </div>
    
      <RangeBar label="Attratività" message="Quanto era bello, attraente nel fisico e nello stile"/>
      <RangeBar label="Interazioni" message="Quanto è stato facile interagirci"/>
      <RangeBar label="Interessi Comuni" message="Quanto avevate in comune"/>
      
      <div className="grid grid-cols-2 gap-4 items-center">
        <div>
        <button type="submit" className="btn btn-block btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          Vota
        </button>
        </div>
        <div>
        <button type="submit" className="btn btn-outline btn-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          Scarta
        </button>
        </div>
      </div>
      <p className="text-xs text-gray-700 pb-3 text-center">Nota: Se assolutamente non vuoi averci più a che fare premi "Scarta"</p>
    </section>
  );
}
