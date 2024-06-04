import { headers } from 'next/headers';
import RangeBar from "@/components/RangeBar";
import Avatar from "@/components/Avatar";
import SwitchBox from "@/components/SwitchBox";
import { createClient } from '@supabase/supabase-js'

interface User {
  id: string
  name: string
  src: string
  gender: string
}

async function getUsers(type: string) {
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

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}


export default async function DatingPage() {
  const users: User[]  = await getUsers("prev")
  const actualDate: User = users[getRandomInt(9)]
  //const meetingDonePerc = Math.round(dataPrev.length / (dataNext.length + dataPrev.length)*100)
 
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8">
      
      <div className="inline-block max-w-lg text-center justify-center">
        <p className="text-4xl font-bold pb-3">Dating</p>
        <p className="text-l">Stai per incontrare...</p>
      </div>    

      <div className="flex gap-3 items-center">
        <Avatar src={users[getRandomInt(9)].src} type = "" />
        <Avatar src={users[getRandomInt(9)].src} type = "secondary" />
        <Avatar src={actualDate.src} type = "active" />
        <Avatar src={users[getRandomInt(9)].src} type = "secondary"  />
        <Avatar src={users[getRandomInt(9)].src} type = ""  />
      </div>



      
      <div role="alert" className="alert">
        <p className="text-xl font-bold uppercase">{actualDate.name}</p>
      </div>

    
      <RangeBar label="Attratività" message="Quanto era bello, attraente nel fisico e nello stile"/>
      <RangeBar label="Interazioni" message="Quanto è stato facile interagirci"/>
      <RangeBar label="Interessi Comuni" message="Quanto avevate in comune"/>


      <SwitchBox 
        message="Se assolutamente non vuoi averci più a che fare..." 
        title ="Ignora incontro"
      />

     
    </section>
  );
}
