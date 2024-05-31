export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')

  var data = null

  if (type == "actual"){
    data = [ 
      {
        id: "1",
        nome: "Avocado",
        src :"./fruit-5.jpeg"
      }
    ]
  } else if (type == "prev"){
    data = [ 
      {
        id: "3",
        nome: "Anguria",
        src :"./fruit-8.jpeg"
      },
      {
        id: "2",
        nome: "Pesca",
        src :"./fruit-2.jpeg"
      }
    ]
  } else if (type == "next"){
    data = [ 
      {
        id: "8",
        nome: "Kiwi",
        src :"./fruit-9.jpeg"
      },
      {
        id: "5",
        nome: "Limone",
        src :"./fruit-4.jpeg"
      },
      {
        id: "7",
        nome: "Banana",
        src :"./fruit-7.jpeg"
      }
      
    ]
  }


  return Response.json(data)

}