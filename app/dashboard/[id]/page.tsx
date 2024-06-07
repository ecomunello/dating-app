import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import MatchBox from "@/components/MatchBox";
import SpecialMatchBox from "@/components/SpecialMatchBox";
import {User, BestMatch, getUsers, getBestMatch} from "../../api/supabase"

function redirectError(){
  revalidatePath('/error') // Update cached posts
  redirect(`/error`) // Navigate to the new post page
}

export default async function DashboardPage({ params }: { params: { id: number } }) {
  const users: User[]  = await getUsers()
  const matches: BestMatch[]  = await getBestMatch(params.id)

  if (typeof users == 'undefined' || users.length == 0) {redirectError()}

  if (matches.length == 0){
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="divider">
          Scopri i tuoi incontri
      </div>
      <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" className="tab tab-active bg-secondary">Best Match</a>
        <a role="tab" className="tab">Tuoi Preferiti</a>
        <a role="tab" className="tab">Overall</a>
      </div>

     
      <div className="grid grid-cols-1 gap-4 py-2">
      <div role="alert" className="alert bg-slate-800 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Non ci sono ancora dati, ripassa più tardi, qui troverai i tuoi migliori match.</span>
      </div>
      </div>

      <div className="divider">
        Menzioni speciali
      </div>
      <div role="alert" className="alert bg-slate-800 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Non ci sono ancora dati, ripassa più tardi, qui troverai le persone cui hai avuto più intesa.</span>
      </div>
      </section>
    )
  }

  const match1 = users.find(x => x.id == matches[0].match_id)
  const match2 = users.find(x => x.id == matches[1].match_id)
  const match3 = users.find(x => x.id == matches[2].match_id)
  const match4 = users.find(x => x.id == matches[3].match_id)
  const match5 = users.find(x => x.id == matches[4].match_id)

  if (match1 === undefined || match2 === undefined || match3 === undefined || match4 === undefined || match5 === undefined) {
    redirectError()
  } else return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="divider">
          Scopri i tuoi incontri
      </div>
      <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" className="tab tab-active bg-secondary">Best Match</a>
        <a role="tab" className="tab">Tuoi Preferiti</a>
        <a role="tab" className="tab">Overall</a>
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
