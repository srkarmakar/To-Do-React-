import './App.css'
import TextArea from './components/Textarea'
import List from './components/List'
import { useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const persistData = (newList) => {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  const addTodos = (todo) => {
    let newTodo = [...todos, todo];
    persistData(newTodo);
    setTodos(newTodo);
  }

  const editTodo = (index) => {
    let editedTodo = todos[index]
    setText(editedTodo);
    deleteTodos(index);
  }

  const deleteTodos = (index) => {
    let removedTodos = todos.filter((todo, todoIndex) => {
      return todoIndex != index
    })
    persistData(removedTodos)
    setTodos(removedTodos)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <main className='w-full'>
      <TextArea addTodos={addTodos} text={text} setText={setText}></TextArea>
      <List todos={todos} deleteTodos={deleteTodos} editTodo={editTodo}></List>
    </main>
  )
}

export default App
