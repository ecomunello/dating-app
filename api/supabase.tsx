import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://dnwzvsbmjnrqkgpohllv.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRud3p2c2Jtam5ycWtncG9obGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MTYzNTQsImV4cCI6MjAzMzA5MjM1NH0.Risknq8ShXrJYzMOG4QOU9D8DXhX9nbnuytcMyAeYT0'
)

export class User {
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

export async function getUsers() {
  let { data: users, error } = await supabase
  .from('users')
  .select()
  .returns<User[]>()

  if (users == null) return []
  else return users
}

export class DateTrack{
  id: number
  user_id: number
  user_date_id: number
  vote_attractive: number
  vote_interaction: number
  vote_interest: number
  date_done: boolean
  is_skipped: boolean
  avg_vote: number

  public constructor(
    id: number,
    user_id: number,
    user_date_id: number,
    vote_attractive: number,
    vote_interaction: number,
    vote_interest: number,
    date_done: boolean,
    is_skipped: boolean,
    avg_vote: number
  ) {
    this.id = id;
    this.user_id = user_id;
    this.user_date_id = user_date_id;
    this.vote_attractive = vote_attractive;
    this.vote_interaction = vote_interaction;
    this.vote_interest = vote_interest;
    this.date_done = date_done;
    this.is_skipped = is_skipped;
    this.avg_vote = avg_vote;
  }
}

export async function getDateTrack(id: number, date_done: boolean){
  let { data: datetrack, error } = await supabase
  .from('datetrack')
  .select('*')
  .eq('user_id', id)
  .eq('date_done', date_done)
  .returns<DateTrack[]>()
  
  if (datetrack == null) return []
  else return datetrack
}

export async function getDateTrackDashboard(id: number, date_done: boolean){
  let { data: datetrack, error } = await supabase
  .from('datetrack')
  .select('*')
  .eq('user_id', id)
  .eq('date_done', date_done)
  .eq('is_skipped', false)
  .order('avg_vote', { ascending: false })
  .limit(5)
  .returns<DateTrack[]>()
  
  if (datetrack == null) return []
  else return datetrack
}



export async function updateDate(
  vote_attractive: number, 
  vote_interaction:number,
  vote_interest:number,
  avg_vote:number,
  idUser: number,
  idDate: number

){
  const { data, error } = await supabase
  .from('datetrack')
  .update(
    {
      'vote_attractive' : vote_attractive, 
      'vote_interaction' : vote_interaction,
      'vote_interest' : vote_interest,
      'avg_vote' : avg_vote,
      'date_done' : true,
      'is_skipped' : false
    }
  )
  .eq('user_id', idUser)
  .eq('user_date_id', idDate)
  .select()

  return data
}

export async function updateDateSkip(
  idUser: number,
  idDate: number
){
  const { data, error } = await supabase
  .from('datetrack')
  .update(
    {
      'date_done' : true,
      'is_skipped' : true
    }
  )
  .eq('user_id', idUser)
  .eq('user_date_id', idDate)
  .select()

  return data
}