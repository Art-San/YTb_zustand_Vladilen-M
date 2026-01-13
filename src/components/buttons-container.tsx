import { incrementCount, decrementCount } from '../store/use-counter-store'

const ButtonsContainer = () => {
  return (
    <div className="card">
      <button onClick={incrementCount()}>Увеличить число</button>
      <button onClick={decrementCount()}>Уменьшить число</button>
    </div>
  )
}

export default ButtonsContainer
