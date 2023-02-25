// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// EXPRESS
const BASE_URL = process.env.BASE_URL

// conectarlo  auna base de datos, hacer la peticion y retornar un JS
export default async function handler (req, res) {
  const { value } = req.body
  // req = body, params

  const response = await fetch(`${BASE_URL}/${value}`)
    .then(res => res.json())
    .then(res => {
      return res
    })

  res.status(200).json(response)
}
