import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type AppStore = {
  vegetables: {
    tomatoes: number
    cucumbers: number
  }
  increaseVegetables: (vegetables: 'tomatoes' | 'cucumbers') => void
}

const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      vegetables: {
        tomatoes: 0,
        cucumbers: 0
      },
      increaseVegetables: (vegetables) => {
        set((state) => ({
          vegetables: {
            ...state.vegetables,
            [vegetables]: state.vegetables[vegetables] + 1
          }
        }))
      }
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

// const useAppStore = create<AppStore>()(
//   persist(
//     immer((set) => ({
//       vegetables: {
//         tomatoes: 0,
//         cucumbers: 0
//       },
//       increaseVegetables: (vegetables) => {
//         set((state) => {
//           state.vegetables[vegetables] += 1
//         })
//       }
//     })),
//     {
//       name: 'app-store',
//       storage: createJSONStorage(() => localStorage)
//     }
//   )
// )

// const useAppStore = create<AppStore>()(
//   immer((set) => ({
//     vegetables: {
//       tomatoes: 0,
//       cucumbers: 0
//     },
//     increaseVegetables: (vegetables) => {
//       set((state) => {
//         state.vegetables[vegetables] += 1
//       })
//     }
//   }))
// )

export const appStore = () => useAppStore.getState()

export default useAppStore
// import { create } from 'zustand'

// type State = {
//   tomatoes: number
//   cucumbers: number
//   setTomatoes: (count: number) => void
//   incrementCucumbers: () => void
// }

// const useAppStore = create<State>((set, get) => ({
//   // Состояние
//   tomatoes: 0,
//   cucumbers: 0,
//   // Мутаторы
//   setTomatoes: (count: number) => set({ tomatoes: count }),
//   incrementCucumbers: () => {
//     if (get().cucumbers < 10) {
//       set({
//         cucumbers: get().cucumbers + 1
//       })
//     }
//   }
//   // addTomatoes: () => set((state) => ({ tomatoes: state.tomatoes + 1 })),
//   // removeTomatoes: () => set((state) => ({ tomatoes: state.tomatoes - 1 })),
//   // removeCucumbers: () => set((state) => ({ cucumbers: state.cucumbers - 1 })),
//   // resetTomatoes: () => set({ tomatoes: 0 }),
//   // resetCucumbers: () => set({ cucumbers: 0 }),
//   // resetAll: () => set({ tomatoes: 0, cucumbers: 0 })
//   // getTotal: () => get().tomatoes + get().cucumbers,
// }))

// export default useAppStore
