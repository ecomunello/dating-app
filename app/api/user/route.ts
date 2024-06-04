import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')

  // Create a single supabase client for interacting with your database
  const supabase = createClient(
    'https://dnwzvsbmjnrqkgpohllv.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRud3p2c2Jtam5ycWtncG9obGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MTYzNTQsImV4cCI6MjAzMzA5MjM1NH0.Risknq8ShXrJYzMOG4QOU9D8DXhX9nbnuytcMyAeYT0'
  )

  let { data: users, error } = await supabase
  .from('users')
  .select()

  if (type == "mock"){
    const dataMock = [ 
      {
        id: "3",
        nome: "Anguria",
        src :"./fruit-8.jpeg",
        status : "VOTED"
      },
      {
        id: "2",
        nome: "Pesca",
        src :"./fruit-2.jpeg",
        status : "VOTED"
      },
      {
        id: "1",
        nome: "Avocado",
        src :"./fruit-5.jpeg",
        status : "TO VOTE"
      },
      {
        id: "8",
        nome: "Kiwi",
        src :"./fruit-9.jpeg",
        status : "TO VOTE"
      },
      {
        id: "5",
        nome: "Limone",
        src :"./fruit-4.jpeg",
        status : "TO VOTE"
      },
      {
        id: "7",
        nome: "Banana",
        src :"./fruit-7.jpeg",
        status : "TO VOTE"
      },
      {
        id: "11",
        nome: "Fragola",
        src :"./fruit-7.jpeg",
        status : "TO VOTE"
      }
      
    ]
    return NextResponse.json(dataMock)
  }


  return NextResponse.json(users)

}