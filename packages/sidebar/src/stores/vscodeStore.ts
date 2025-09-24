import { create } from "zustand"

interface VscodeData {
  language: string,
  todayWorkTime: number,
}

interface VscodeDataState {
  vscodeData: VscodeData,
  setVscodeData: (newData: VscodeData) => void,
  setProperty: (property: string, value: unknown) => void
}

const initialState: VscodeData = {
  language: 'en',
  todayWorkTime: 0
}

export const useVscodeStore = create<VscodeDataState>((set) => {
  return {
    vscodeData: initialState,
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