import useAppStore from '../store/use-app-store'

export function Cucumbers() {
  const cucumbers = useAppStore((state) => state.vegetables.cucumbers)
  console.log('огурцы')
  return (
    <div>
      <h1>Cucumbers</h1>
      <p>{cucumbers}</p>
    </div>
  )
}
