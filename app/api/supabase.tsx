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

export class BestMatch{
  id: number
  user_id: number
  match_id: number

  public constructor(id: number, user_id: number, match_id: number) {
    this.id = id;
    this.user_id = user_id;
    this.match_id = match_id;
  }
}

export async function getBestMatch(id: number){
  let { data: bestmatch, error } = await supabase
  .from('bestmatch')
  .select('*')
  .eq('user_id', id)
  .returns<BestMatch[]>()
  
  if (bestmatch == null) return []
  else return bestmatch
}

export class DateTrack{
  id: number
  user_id: number
  user_date_id: number
  vote_attractive: number
  vote_interaction: number
  vote_interest: number
  date_done: boolean

  public constructor(
    id: number,
    user_id: number,
    user_date_id: number,
    vote_attractive: number,
    vote_interaction: number,
    vote_interest: number,
    date_done: boolean
  ) {
    this.id = id;
    this.user_id = user_id;
    this.user_date_id = user_date_id;
    this.vote_attractive = vote_attractive;
    this.vote_interaction = vote_interaction;
    this.vote_interest = vote_interest;
    this.date_done = date_done;
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