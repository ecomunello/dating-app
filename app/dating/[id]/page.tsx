import RangeBar from "@/components/RangeBar";
import BoxWithCounter from "@/components/BoxWithCounter";
import Avatar from "@/components/Avatar";
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import {User, getUsers, DateTrack, getDateTrack} from "../../api/supabase"

function getUserById(users: User[], id : number){
  return users.find(x => x.id == id)
}

export default async function DatingPage({ params }: { params: { id: number } }) {
  revalidatePath('/dating/[id]', 'page')

  const users: User[]  = await getUsers()
  const actualUser: User | undefined = getUserById(users, params.id )
  const dateTrackList: DateTrack[] =  await getDateTrack(params.id, false)
  const dateTrackListOld: DateTrack[] =  await getDateTrack(params.id, true)
  const actualDate: User | undefined  = getUserById(users, dateTrackList[0].user_date_id )
  const nextDate: User | undefined  = getUserById(users, dateTrackList[1].user_date_id )
  const next2Date: User | undefined  = getUserById(users, dateTrackList[2].user_date_id )

  var lastDate: User | undefined  = undefined
  var last2Date: User | undefined  = undefined
  
  const blankMan = new User(0,"Missing","/blank_man.jpg","M")
  const blankWoman = new User(0,"Missing","/blank_woman.jpg","F")

  if (dateTrackListOld.length >= 2 &&  actualUser != undefined){
    lastDate = getUserById(users, dateTrackListOld[0].user_date_id )
    last2Date = getUserById(users, dateTrackListOld[1].user_date_id )
  }else if (dateTrackListOld.length >= 1 &&  actualUser != undefined ){
    lastDate = getUserById(users, dateTrackListOld[0].user_date_id )
    if (actualUser.gender == "M") {
      last2Date=blankWoman
    } else{
      last2Date=blankMan
    }
  }else if (actualUser != undefined ){
    if (actualUser.gender == "M") {
      last2Date=blankWoman
      lastDate=blankWoman
    } else{
      last2Date=blankMan
      lastDate=blankMan
    }

  }


  if (
    actualUser === undefined
    ||actualDate === undefined 
    || nextDate === undefined  
    || next2Date === undefined 
    || lastDate === undefined 
    || last2Date === undefined 
  ) {
    revalidatePath('/error') // Update cached posts
    redirect(`/error`) // Navigate to the new post page
  } else return (
    <section className="flex flex-col items-center justify-center gap-4 py-8">

      <div className="flex gap-3 items-center">
        <Avatar src={last2Date.src} type = "" />
        <Avatar src={lastDate.src} type = "secondary" />
        <Avatar src={actualDate.src} type = "active" />
        <Avatar src={nextDate.src} type = "secondary"  />
        <Avatar src={next2Date.src} type = ""  />
      </div>

      <BoxWithCounter name={actualDate.name} />

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
