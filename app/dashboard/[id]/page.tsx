import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import MatchBox from "@/components/MatchBox";
import SpecialMatchBox from "@/components/SpecialMatchBox";
import {User, DateTrack, getUsers, getDateTrackDashboard} from "../../../api/supabase"
import {Score, calculateBestMatch} from "../../../api/metrics"

function redirectError(){
  revalidatePath('/error') // Update cached posts
  redirect(`/error?message="Errore 3: dati undefined"`) // Navigate to the new post page
}

function getUserName(users: User[], date: Score): string {
  const user = users.find(x => x.id == date.user_date_id)
  if (user == undefined) return ""
  else return user.name
}

function getUserSrc(users: User[], date: Score): string {
  const user = users.find(x => x.id == date.user_date_id)
  if (user == undefined) return ""
  else return user.src
}

export default async function DashboardPage({ params }: { params: { id: number } }) {
  const users: User[]  = await getUsers()
  const matches: DateTrack[]  = await getDateTrackDashboard(params.id, true)

  const scores = await calculateBestMatch(params.id)

  if (typeof users == 'undefined' || users.length == 0) {redirectError()}

  if (scores.length == 0){
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="divider">
          Scopri i tuoi incontri
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

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8">
      <div className="divider">
          Scopri i tuoi incontri migliori
      </div>

      
          <div className='grid grid-cols-2'>
          {
          scores.map(
            (score) => (
                  <MatchBox name={getUserName(users, score)} src={getUserSrc(users, score)} contact="@nomeprofiloIG1"/>
                )
              )
          }
         
      </div>



      <div className="divider">
        Menzioni speciali
      </div>
      <p className="text-xs text-center text-gray-700">
        Qui trovi le persone con cui l'intesa è stata particolarmente alta
      </p>
      <div className="grid grid-cols-3 gap-4 py-2">
      {
        scores.filter(function(score) {
          return score.score>8;
        }).map(
          (score) => (
                <SpecialMatchBox name={getUserName(users, score)} src={getUserSrc(users, score)} />
              )
            )
        }
      </div>
  
    </section>
  );
}
