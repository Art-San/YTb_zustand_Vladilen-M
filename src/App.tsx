import './App.css'
import Tomatoes from './components/tomatoes'

import { appStore } from './store/use-app-store'
import { Cucumbers } from './components/cucumbers'

function App() {
  return (
    <>
      <div className="">
        <button onClick={() => appStore().increaseVegetables('tomatoes')}>
          Добавить помидор
        </button>
      </div>
      <Tomatoes />
      <Cucumbers />
      <button onClick={() => appStore().increaseVegetables('cucumbers')}>
        Добавить огурец
      </button>
    </>
  )
}

export default App
// import './App.css'
// import Icons from './components/icons'
// import ValueContainer from './components/value-container'
// import ButtonsContainer from './components/buttons-container'

// import {
//   fetchTodos,
//   useIsLoading,
//   useTodos,
//   completeTodo,
//   deleteTodo
// } from './store/use-todos-store'
// import Tomatoes from './components/tomatoes'
// import { useRef } from 'react'
// import useAppStore from './store/use-app-store'
// import { Cucumbers } from './components/cucumbers'

// function App() {
//   const todos = useTodos()
//   const isLoading = useIsLoading()

//   const inputRef = useRef<HTMLInputElement>(null)

//   const setTomatoes = useAppStore((state) => state.setTomatoes)

//   return (
//     <>
//       <Icons />
//       <ValueContainer />
//       <ButtonsContainer />
//       <div className="">
//         <input type="number" ref={inputRef} />
//         <button onClick={() => setTomatoes(Number(inputRef.current?.value))}>
//           Установить
//         </button>
//       </div>
//       <Tomatoes />
//       <Cucumbers />
//       <button onClick={() => useAppStore.getState().incrementCucumbers()}>
//         Добавить огурец
//       </button>

//       <button onClick={fetchTodos}>Загрузить todos</button>
//       <div className="todos">
//         <h1>Todo List</h1>

//         {!isLoading ? (
//           <ul className="todo-list">
//             {todos.map((todo) => (
//               <li key={todo.id} className={todo.completed ? 'completed' : ''}>
//                 <span
//                   className={`todo-text ${
//                     todo.completed ? 'completed-text' : ''
//                   }`}
//                 >
//                   {todo.todo}
//                 </span>
//                 <div className="actions">
//                   <button onClick={() => completeTodo(todo.id)}>
//                     {todo.completed ? '✅' : '☑️'}
//                   </button>
//                   <button onClick={() => deleteTodo(todo.id)}>❌</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           'Загрузка...'
//         )}
//       </div>
//     </>
//   )
// }

// export default App
