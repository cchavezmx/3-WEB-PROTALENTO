import { create } from "zustand";

export const appStore = create((set) => ({
  dark: false,
  darkmode: (state) => {    
    if (state) {
     return {
       style: 'dark',
       src: 'https://62a677d060f8713eb70071fe--famous-entremet-fa56bf.netlify.app/assets/moon.4f70221d.png'
     }
    } else {
     return {
       style: '',
       src: 'https://62a677d060f8713eb70071fe--famous-entremet-fa56bf.netlify.app/assets/sun.a0f56194.png'
     }
    }
 },

  handledDarkMode: (boolean) => set({ dark: boolean })
}))


