import { useGlobalContext } from '../context/ContextGlobal'

const Footer = () => {
  const { keywordContext } = useGlobalContext()

  return (
    <footer>
      has comprado {keywordContext}
    </footer>
  )
}

export default Footer
