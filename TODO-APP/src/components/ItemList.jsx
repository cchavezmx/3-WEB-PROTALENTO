import { useState } from 'react'
import { Stack, Typography, ListItem, ListItemButton, Checkbox } from '@mui/material'
import { useGlobalContext } from '../context/ContextGlobal'

const ItemList = ({ item }) => {
  const [itemClick, setItemClick] = useState(false)
  const { setKeywordContext } = useGlobalContext()
  function handledClick (e) {
    setItemClick(e.target.checked)
    setKeywordContext(item)
  }

  return (
    <ListItem key={item}>
      <ListItemButton
        sx={{
          borderRadius: '8px'
        }}
      >
        <Stack direction='row' sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox
            color='primary'
            size='medium'
            onChange={handledClick}
          />
          <Typography
            sx={{
              textTransform: 'uppercase',
              textDecoration: itemClick && 'line-through'
            }}
          >
            {item}
          </Typography>
        </Stack>
      </ListItemButton>
    </ListItem>
  )
}

export default ItemList
