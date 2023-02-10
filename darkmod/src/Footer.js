import { appStore } from "./context/store"
// hydratar estado cuando se renderiza el componente

export default function Footer(){

  const { dark, darkmode } = appStore()

  return (
    <footer className={darkmode(dark).style}>
      <h2>cchavezmx@outlook.com</h2>
    </footer>
  )
}