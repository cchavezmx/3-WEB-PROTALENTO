import SWR from 'swr'

const UploadBar = () => {

  const { data } = SWR('http://localhost:4000/api/v1/metadata')

  console.log(data)

  return (
    <div id="upload-bar" className="h-[130px] grow-1 flex flex-col justify-center gap-1">
      <small>{data && `Has usado ${data?.result?.credits?.usage} GB de almacenamiento`}</small>
      <span className="progress--bar">
        <span className="progress--bar--fill" style={{width: data?.result?.credits.used_percent}}></span>
      </span>
      <div className="progress-info">
        <small>0 GB</small>
        <small>25 GB</small>
      </div>
      <span className="comic-window">
        {data?.result?.credits?.usage} <small>GB disponibles</small>
      </span>
    </div>      
  )
}

export default UploadBar