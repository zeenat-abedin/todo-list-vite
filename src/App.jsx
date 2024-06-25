import { useState } from 'react'

function App() {
  const [data, setData] = useState("")
  const [todoList, setTodoList] = useState([])
  
  function handleTodo(e) {
    e.preventDefault()
    setData(e.target.value)
  }

  function handleSubmit() {
    if (data.trim !== "") {     
      setTodoList([...todoList, data])
      setData("")
    }
  }

  return (
    <div className='todo-list'>
      <h1>Todo List</h1>
      <input value={data} onChange={handleTodo} />
      <button onClick={handleSubmit}>Add Todo</button>
      <ul className='list-item'>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
