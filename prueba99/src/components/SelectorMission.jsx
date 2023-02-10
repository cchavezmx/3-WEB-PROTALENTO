import { Autocomplete, TextField, Box } from '@mui/material'
import useGetData from '@/hooks/useGetdata'
import useSpaceStore from '@/context/useSpaceStore'
// INVESTIGACION:

export default function SelectorMission () {
  const { data: allMissions, loading } = useGetData({ url: '/api/getData?limit=200' })
  const { setMissionStore } = useSpaceStore()
  const launches = allMissions.map(item => item.mission_name)
  // find, filter en este caso de uso es mejor el find
  const handledSetName = (e, newValue) => {
    if (newValue === null) {
      return ''
    }
    const current = allMissions.find((elemento) => elemento.mission_name === newValue)
    setMissionStore(current)
  }

  return (
    <Box className="slector-responsive">
      {
        loading
          ? <small>Cargando...</small>
          : (
            <Autocomplete
                fullWidth
                id="combo-box-demo"
                options={launches}
                renderInput={(params) => <TextField {...params} label="Lanzamientos" />}
                onChange={handledSetName}
              />
            )
      }
    </Box>
  )
}
