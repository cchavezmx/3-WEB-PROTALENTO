
// https://blog.logrocket.com/using-dangerouslysetinnerhtml-in-a-react-application/

const Contenido = ({ title, content }) => {
  return (
    <main className='p-4 bg-white mt-2 min-h-[20rem]'>
      <h2 className="text-3xl">{title}</h2>
      <div className="mt-5">
        <p>
          { content }
        </p>
      </div>
    </main>
  )
}

export default Contenido