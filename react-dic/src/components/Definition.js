import html2canvas from 'html2canvas'
import { useRef } from 'react'

const Definition = ({ result }) => {
  const captureRef = useRef(null)
  // ejemplo para validar que results sea un arreglo
  // if (!Array.isArray(result)) {
  //   return null
  // }
  // desarrollador JR
  // const definition = result[0]
  
  // desarrolador Sr
  const [definition] = result
  const handledAudioSelect = () => {
    const { phonetics, phonetic } = definition
    const currentAudio = phonetics.find((element) =>
      // eslint-disable-next-line no-prototype-builtins
      element.text === phonetic && element.hasOwnProperty('audio'))
    return currentAudio?.audio
  }
  
  const handledCaputure = () => {
    if (captureRef.current) {
      html2canvas(captureRef.current)
        .then(canvas => {
          // bukets
          const imagenPng = canvas.toDataURL('image/png')
          const a = document.createElement('a')
          a.href = imagenPng
          a.download = 'pepitoimagen.png'
          a.click()
        })
    }
  }

  return (
    <section ref={captureRef}>
      <div className="word_section">
        <span>
          <h2>
            {definition.word}
            <button onClick={handledCaputure} className='btn-capture'>
              📷
            </button>
          </h2>
          <span>
            {definition.phonetic}
          </span>
        </span>
        <span>
        <audio src={handledAudioSelect()} preload="none" controls></audio>
        </span>
      </div>
      <div className="definition_meaning">
        {
          definition.meanings.map((meaning, index) => {
            return (
              <div className="deff" key={index}>
                <div className="deff_type">
                  <h3>
                    {meaning.partOfSpeech}
                  </h3>
                  <span className='deff_line'></span>
                </div>
                <ul>
                  {
                    meaning.definitions.map((element, index) => {
                      const { definition, example, antonyms, synonyms } = element
                      return (
                        <li key={index}>
                          <p style={{ marginBottom: '10px' }}>{definition}</p>
                          {example && <p><span className="definition-span">example: </span>{example}</p>}
                          {/* cada linea se encargue de 1 cosa */}
                          {antonyms.length > 0 && <p><span className="definition-span">antonyms: </span>{antonyms.join(', ')}</p>}
                          {synonyms.length > 0 && <p><span className="definition-span">synonyms: </span>{synonyms.join(', ')}</p>}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Definition
