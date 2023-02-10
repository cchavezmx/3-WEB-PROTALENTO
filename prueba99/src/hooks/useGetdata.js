import { useState, useEffect, useCallback } from 'react'
import useSpaceStore from '@/context/useSpaceStore'
// refactorizar
export default function useGetData ({ url }) {
  const { setAllMissions } = useSpaceStore()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  // memorizar una funcion
  // fetch limit 100 => fetch limit 10
  const getData = useCallback(async () => {
    return fetch(url)
      .then(res => res.json())
      .then(j => {
        setLoading(false)
        setAllMissions(j.launches)
        setData(j.launches)
      })
  }, [url])

  useEffect(() => {
    getData()
  }, [getData])

  return { data, loading }
}
