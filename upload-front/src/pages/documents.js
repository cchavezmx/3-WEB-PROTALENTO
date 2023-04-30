import useSWR from 'swr'
import ZoomImage from '@/components/ZoomImage'
export default function Documents() {

  const { data } = useSWR('http://localhost:4000/api/v1/images')

  return (
    <>
      <main className="flex min-h-screen flex-col w-full items-center justify-between p-24">                      
        <h1 className="text-4xl font-bold">Documents</h1>        
        <div className="flex gap-4 align-bottom w-full justify-center">
          <div className='grid-template'>
          { data && data.result.resources.map((resources) => {
            console.log("🚀 ~ file: index.js:28 ~ {data&&data.result.resources.map ~ resources:", resources)
            return (
              <ZoomImage key={resources.public_id} image={resources.url} >
                <img key={resources.id} src={resources.url} alt={resources.name} />
              </ZoomImage>
            )
            })}
          </div>                  
        </div>
      </main>    
    </>
  )
}