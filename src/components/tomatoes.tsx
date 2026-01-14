import useAppStore from '../store/use-app-store'

export default function Tomatoes() {
  // так делоть хорошо
  const tomatoes = useAppStore((state) => state.vegetables.tomatoes)
  console.log('помидоры')

  // так тоже можно, но не стоит
  // const { tomatoes, cucumbers } = useAppStore()

  return (
    <div>
      <h1>Tomatoes</h1>
      <p>{tomatoes}</p>
    </div>
  )
}
