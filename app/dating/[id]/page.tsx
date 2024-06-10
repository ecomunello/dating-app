import BoxWithCounter from "@/components/BoxWithCounter";
import FormVote from "@/components/FormVote";
import Avatar from "@/components/Avatar";
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import {User, getUsers, DateTrack, getDateTrack} from "../../../api/supabase"

function defaultAvatar(users: User){
  const blankMan = new User(0,"Missing","/blank_man.jpg","M")
  const blankWoman = new User(0,"Missing","/blank_woman.jpg","F")
  if (users.gender == "M") return blankWoman
  else return blankMan
}

function getUserById(users: User[], actualUser: User, id : number){
  const user = users.find(x => x.id == id)
  if (user != undefined) return user
  else return defaultAvatar(actualUser)
}


export default async function DatingPage({ params }: { params: { id: number } }) {
  revalidatePath('/dating/[id]', 'page')

  const users: User[]  = await getUsers()
  const actualUser: User | undefined =users.find(x => x.id == params.id)
  if (actualUser === undefined ){
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-8">
        chi sei?
      </section>
      );
  }
  const dateTrackList: DateTrack[] =  await getDateTrack(params.id, false)
 
  if (dateTrackList===undefined || dateTrackList==null || dateTrackList.length == 0){
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-8">
        <h1  className="text-center text-5xl text-pink-600">Hai finito!</h1>
        <p  className="text-center">Grazie di aver partecipato e speriamo la serata sia stata di tuo gradimento!</p>
        <img src="../end_date.png"></img>
        <a className="link" href={"../dashboard/"+params.id}>vai alla dashboard</a>
      </section>
      );
  }

  const dateTrackListOld: DateTrack[] =  await getDateTrack(params.id, true)

  const actualDate: User  = getUserById(users, actualUser, dateTrackList[0].user_date_id )
  var nextDate: User   = defaultAvatar(actualUser)
  var next2Date: User = defaultAvatar(actualUser)

  if (dateTrackList.length >= 2){
    nextDate = getUserById(users, actualUser, dateTrackList[0].user_date_id )
    next2Date = getUserById(users, actualUser, dateTrackList[1].user_date_id )
  } else if (dateTrackList.length >= 1 ){
    nextDate = getUserById(users, actualUser, dateTrackList[0].user_date_id )
  } 

  var lastDate: User  = defaultAvatar(actualUser)
  var last2Date: User   = defaultAvatar(actualUser)
  
  if (dateTrackListOld.length >= 2 ){
    lastDate = getUserById(users, actualUser, dateTrackListOld[0].user_date_id )
    last2Date = getUserById(users, actualUser, dateTrackListOld[1].user_date_id )
  } else if (dateTrackListOld.length >= 1 ){
    lastDate = getUserById(users, actualUser, dateTrackListOld[0].user_date_id )
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8">

      <div className="flex gap-3 items-center">
        <Avatar src={last2Date.src} type = "" />
        <Avatar src={lastDate.src} type = "secondary" />
        <Avatar src={actualDate.src} type = "active" />
        <Avatar src={nextDate.src} type = "secondary"  />
        <Avatar src={next2Date.src} type = ""  />
      </div>

      <BoxWithCounter name={actualDate.name} />

     <FormVote idUser={params.id} idDate={actualDate.id}/>

      <p className="text-xs text-gray-700 pb-3 text-center">Nota: Se assolutamente non vuoi averci più a che fare premi "Scarta"</p>
    </section>
  );
  
 
}
