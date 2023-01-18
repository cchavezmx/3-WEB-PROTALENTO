import { Stack } from '@mui/material'
import { useGlobalContext } from '../context/ContextGlobal'

const Carrito = () => {
  const { keywordContext } = useGlobalContext()

  return (
    <Stack sx={{ padding: '20px 0', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
      Acabas de seleccionar {keywordContext.toLocaleUpperCase()}
    </Stack>
  )
}

export default Carrito
