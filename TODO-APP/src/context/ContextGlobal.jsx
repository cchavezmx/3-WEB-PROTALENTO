// guardar estados o funciones que se deban compartir en diferentes componentes de REACT
import {
  createContext,
  useState,
  useContext
} from 'react'

// crear el context
const context = createContext()
const Provider = context.Provider

const getItems = async () => {
  return fetch('url')
}

const ContextGlobalProvider = ({ children }) => {
  const [keywordContext, setKeywordContext] = useState('')

  return (
    <Provider value={{
      getItems,
      keywordContext,
      setKeywordContext
    }}
    >
      {children}
    </Provider>
  )
}

function useGlobalContext () {
  return useContext(context)
}

export { ContextGlobalProvider as default, useGlobalContext }
