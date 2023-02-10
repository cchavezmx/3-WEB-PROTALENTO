/* eslint-disable @next/next/no-img-element */
/* eslint-disable camelcase */
import { Box, Typography, Card } from '@mui/material'
import useSpaceStore from '@/context/useSpaceStore'

export default function MissionCard ({ data }) {
  const { mission_name, links, launch_site, flight_number } = data
  const { mission_patch } = links
  const { site_name_long } = launch_site
  // renderizado condicional
  const srcImage = mission_patch || 'https://logos-world.net/wp-content/uploads/2020/09/SpaceX-Symbol.jpg'

  const { missionStore, setMissionStore } = useSpaceStore()

  return (
    <>
    <Card
        onClick={() => setMissionStore(data)}
        sx={{
          display: 'flex',
          width: '100%',
          margin: '10px',
          position: 'relative',
          padding: '4px',
          cursor: 'pointer',
          role: 'button',
          backgroundColor: flight_number === missionStore.flight_number ? '#4B56D2' : '#f2f2f2',
          color: flight_number === missionStore.flight_number ? '#f2f2f2' : 'black'
        }}>
        <Box sx={{ flex: 1 }}>
          <img src={srcImage} alt="Card Image" className="image_patch" />
        </Box>
        <Box sx={{ flex: 2 }}>
          <h3>
            { mission_name }
          </h3>
          <p>
          { site_name_long }
          </p>
        </Box>
        <Box>
        <Typography variant='p' sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          color: '#778da9'
        }}>
        </Typography>
        </Box>

      </Card>
    </>
  )
}
