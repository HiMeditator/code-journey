import { create } from "zustand"

interface VscodeData {
  time: string
}

interface VscodeDataState {
  vscodeData: VscodeData,
  setVscodeData: (newData: VscodeData) => void,
  setProperty: (property: string, value: unknown) => void
}

export const useVscodeStore = create<VscodeDataState>((set) => {
  return {
    vscodeData: {
      time: ''
    },
    setVscodeData: (data) => {
      set(() => ({ vscodeData: data }))
    },
    setProperty: (property, value) => {
      set((state) => ({
        vscodeData: {
          ...state.vscodeData,
          [property]: value
        }
      }))
    }
  }
})