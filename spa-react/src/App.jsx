import { useState } from 'react'
import Contenido from './Contenido'
import './App.css'

const contenido = {
  home: {
    title: 'Hello',
    slug: 'home',
    content: "1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione unde porro veniam iste consectetur temporibus, at natus facilis possimus dignissimos ipsam accusantium sunt mollitia a sed maxime esse quibusdam dolorem."
  },
  stuff: {
    title: 'Stuff',
    slug: 'stuff',
    content: "2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione unde porro veniam iste consectetur temporibus, at natus facilis possimus dignissimos ipsam accusantium sunt mollitia a sed maxime esse quibusdam dolorem."
  }, 
  contact: {
    title: 'Contacto',    
    slug: 'contact',
    content: "3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione unde porro veniam iste consectetur temporibus, at natus facilis possimus dignissimos ipsam accusantium sunt mollitia a sed maxime esse quibusdam dolorem."
  }
}

const hoverButton = 'hover:bg-blue-400 hover:cursor-pointer flex items-center px-4'
const activeButton = 'bg-blue-400 hover:cursor-pointer p-0 flex items-center px-4'

function App() {

  const handledContent = (seccion) => {
    return contenido[seccion]
  }
  const [seccion, setSeccion] = useState(handledContent('home'))  
  
  return (
    <div className='bg-yellow-400 h-screen flex place-content-center flex-wrap flex-col'>
      <h1 className='text-4xl text-center mb-4'>Probando una SPA</h1>
      <nav className='bg-black rounded-md'>
        <ul className='text-white flex justify-center text-5xl h-[80px]'>
          <li className={seccion?.slug === 'home' ? activeButton : hoverButton } onClick={() => setSeccion(handledContent('home'))}>Home</li>
          <li className={seccion?.slug === 'stuff' ? activeButton : hoverButton } onClick={() => setSeccion(handledContent('stuff'))}>Stuff</li>
          <li className={seccion?.slug === 'contact' ? activeButton : hoverButton } onClick={() => setSeccion(handledContent('contact'))}>Contact</li>
        </ul>
      </nav>
      <Contenido title={seccion.title} content={seccion.content} />
    </div>
  )
}

export default App
