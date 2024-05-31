//https://nextjs.org/docs/app/building-your-application/routing/route-handlers


export async function POST(request: Request) {
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    return Response.json({ name, email })
  }