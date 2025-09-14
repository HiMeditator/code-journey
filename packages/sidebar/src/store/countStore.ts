import { create } from "zustand"

export interface CountState {
  count: number
  inc: () => void,
  setZero: () => void
}

export const useCountStore = create<CountState>((set) => {
  return {
    count: 0,
    inc: () => {
      set((state) => ({ count: state.count + 1 }))
    },
    setZero: () => {
      set({ count: 0 })
    },
  }
})