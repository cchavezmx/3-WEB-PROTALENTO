import Image from "next/image"
import { useRouter } from "next/router"

const LogoControls = ({ toogleUploadForm }) => {

  const router = useRouter()

  return (
    <header id="logo-controls" className="flex justify-items-center gap-3 flex-col">
    <Image 
      src="/images/logo.svg"
      alt="Logo"
      width={100}
      height={100}
    />
    <div className="flex itemce gap-3 mt-3">
    <button className="files-button" onClick={() => router.push('/documents')}>          
        <Image
          src="/images/icon-document.svg"
          alt="Upload"
          width={32}
          height={32}
        />          
    </button>
    <button className="files-button">          
        <Image
          src="/images/icon-folder.svg"
          alt="Upload"
          width={32}
          height={32}
        />
    </button>
    <button className="files-button" onClick={toogleUploadForm}>
      <Image
        src="/images/icon-upload.svg"
        alt="Upload"
        width={32}
        height={32}
      />
    </button>
    </div>
  </header>
  )
}

export default LogoControls