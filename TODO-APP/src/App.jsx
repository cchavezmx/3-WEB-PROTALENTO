/* eslint-disable no-undef */
import './App.css'
import TodoView from './TodoView'
import ContextGlobalProvider from './context/ContextGlobal'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <ContextGlobalProvider>
        <TodoView />
        <Footer />
      </ContextGlobalProvider>
    </>
  )
}

export default App
