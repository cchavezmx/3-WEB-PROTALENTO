/* eslint-disable no-undef */
import './App.css'
import { useState } from 'react'
import { MyNavBar } from './misComponentes/index.js'
import { TextField, Box, Stack, Button } from '@mui/material'
import ItemList from './components/ItemList'
import Carrito from './components/Carrito'

function TodoView () {
  const [items, setItems] = useState(['uvas', 'leche'])

  const addItemForm = (e) => {
    e.preventDefault()

    const form = new FormData(e.target)
    const { value } = Object.fromEntries(form)
    if (value === '') return
    setItems((prev) => [...prev, value])
    e.target.reset()
  }

  return (
    <>
      <section>
        <MyNavBar />
      </section>
      <Box sx={{
        marginTop: '5rem'
      }}
      >
        <Carrito />
        <form onSubmit={addItemForm}>
          <Stack direction='row' justifyContent='center' spacing={2}>
            <TextField
              id='value'
              name='value'
              placeholder='Añade lo que quieres comprar'
              error
            />
            <Button
              variant='contained'
              color='primary'
              type='submit'
            >Añadir a la lista
            </Button>
          </Stack>
        </form>
        <Stack>
          <ul>
            {
              items.map(item => <ItemList key={item} item={item} />)
            }
          </ul>
        </Stack>
      </Box>
    </>
  )
}

export default TodoView
