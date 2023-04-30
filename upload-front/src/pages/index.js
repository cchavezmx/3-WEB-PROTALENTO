import { useState } from "react"
import LogoControls from "@/components/LogoControls"
import UploadBar from "@/components/UploadBar"
import UploadForm from "@/components/UploadForm"
import useSWR from "swr"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toogleUploadForm = () => setIsOpen(!isOpen)

  return (
  <>
    <main className="flex min-h-screen w-full items-center justify-between p-24">
      <div className="flex gap-4 align-bottom w-full justify-center">
        <LogoControls toogleUploadForm={toogleUploadForm}/>      
        <UploadBar />        
      </div>
      <UploadForm isOpen={isOpen} setIsOpen={setIsOpen} />     
    </main>    
  </>
  )
}


