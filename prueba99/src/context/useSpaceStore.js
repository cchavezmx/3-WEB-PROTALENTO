import { create } from 'zustand'
// allmission se setea desde el custo Hook de useGetData

const context = {
  allMissions: [],
  missionStore: {
    launch_site: null,
    links: {
      flickr_images: []
    },
    mission_name: null
  }
}

const useSpaceStore = create(set => ({
  ...context,
  setMissionStore: (mission) => set({ missionStore: mission }),
  setAllMissions: (missions) => set({ allMissions: missions })
}))

export default useSpaceStore
