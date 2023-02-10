/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */
import { Box, Typography, Button } from '@mui/material'
import useSpaceStore from '@/context/useSpaceStore'

export default function LaunchesCard () {
  // querySelector('video')
  // Intersection Observer API
  const { missionStore } = useSpaceStore()
  const {
    launch_site,
    links,
    mission_name
  } = missionStore

  // carrusel de imagenes
  const { flickr_images, video_link } = links

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #eaeaea'
    }}>
      <Box sx={{
        flex: 2
      }}>
        <picture>
          <source srcSet={flickr_images[0]} type="image/webp" />
          <img srcSet="https://logos-world.net/wp-content/uploads/2020/09/SpaceX-Symbol.jpg" alt="fallback image space x logo" className="image_lunches" />
        </picture>
      </Box>
      <Box sx={{
        flexGrow: 1
      }}>
        <Typography variant='h5' sx={{ padding: '12px', textAlign: 'center' }}>
            { mission_name }
        </Typography>
        <Box sx={{
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Typography variant='p'>
              { launch_site?.site_name_long || 'Dale click a uno de los lanzamientos para ver más detalles' }
          </Typography>
          <Button variant='contained'
            onClick={() => window.open(video_link, '_blank')}
            sx={{
              marginTop: '12px'
            }}
          >
            Ver más
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
