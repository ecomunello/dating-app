import { siteConfig } from "@/config/site";
import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import MatchBox from "@/components/MatchBox";
import SpecialMatchBox from "@/components/SpecialMatchBox";

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

class BestMatch{
  id: number
  user_id: number
  match_id: number

  public constructor(id: number, user_id: number, match_id: number) {
    this.id = id;
    this.user_id = user_id;
    this.match_id = match_id;
  }
}

const supabase = createClient(
  'https://dnwzvsbmjnrqkgpohllv.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRud3p2c2Jtam5ycWtncG9obGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MTYzNTQsImV4cCI6MjAzMzA5MjM1NH0.Risknq8ShXrJYzMOG4QOU9D8DXhX9nbnuytcMyAeYT0'
)

function redirectError(){
  revalidatePath('/error') // Update cached posts
  redirect(`/error`) // Navigate to the new post page
}

async function getBestMatch(id: number){
  let { data: bestmatch, error } = await supabase
  .from('bestmatch')
  .select('*').eq('user_id', id).returns<BestMatch[]>()
  
  if (bestmatch == null) return []
  else return bestmatch
}

async function getUsers() {
  
  let { data: users, error } = await supabase
  .from('users')
  .select().returns<User[]>()

  if (users == null) return []
  else return users
}

export default async function DashboardPage({ params }: { params: { id: number } }) {
  const users: User[]  = await getUsers()
  const matches: BestMatch[]  = await getBestMatch(params.id)

  if (typeof users == 'undefined' || users.length == 0) redirectError()

  const match1 = users.find(x => x.id == matches[0].match_id)
  const match2 = users.find(x => x.id == matches[1].match_id)
  const match3 = users.find(x => x.id == matches[2].match_id)
  const match4 = users.find(x => x.id == matches[3].match_id)
  const match5 = users.find(x => x.id == matches[4].match_id)

  if (match1 === undefined || match2 === undefined || match3 === undefined || match4 === undefined || match5 === undefined) {
    redirectError()
  } else return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      
      <div className="inline-block max-w-lg text-center justify-center">
        <p className="text-3xl">Dashboard</p>
        <p className="text-2xl text-pink-600">
          Incontri&nbsp;
        </p>
      </div>

      <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" className="tab tab-active bg-secondary">Best</a>
        <a role="tab" className="tab">Besty</a>
        <a role="tab" className="tab">Overall</a>
      </div>

      <div className="divider">
          I tuoi 5 incontri migliori
      </div>
      <div className="grid grid-cols-2 gap-4 py-2">
       <MatchBox name={match1.name} src={match1.src} contact="@nomeprofiloIG1"/>
       <MatchBox name={match2.name} src={match2.src} contact="@nomeprofiloIG2"/>
       <MatchBox name={match3.name} src={match3.src} contact="@nomeprofiloIG3"/>
       <MatchBox name={match4.name} src={match4.src} contact="@nomeprofiloIG4"/>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <MatchBox name={match5.name} src={match5.src} contact="@nomeprofiloIG5" />
      </div>

      <div className="divider">
        Menzioni speciali
      </div>
      <p className="text-xs text-center text-gray-700 pb-3">
        Qui trovi le persone con cui l'intesa è stata particolarmente alta
      </p>
      <div className="grid grid-cols-2 gap-4 py-2">
        <SpecialMatchBox name={match1.name} src={match1.src}/>
        <SpecialMatchBox name={match4.name} src={match4.src}/>
      </div>
    </section>
  );
}
