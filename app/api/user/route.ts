export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')

  var data = null

  if (type == "prev"){
    data = [ 
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
      }
    ]
  } else if (type == "next"){
    data = [ 
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
  }


  return Response.json(data)

}