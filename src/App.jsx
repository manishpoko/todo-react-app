
import {useState, useEffect} from 'react'
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"




function App() {

  //keeping 'todos' array here, instead of in 'TodoList' because it is the parent of both TodoInput and TodoList, and can be accessed by both.
  //not required for todoCard as it is a child of TodoList and can access 'todos' through props.
// initial state of todos array-
//   let todos = [
//     'hit the gym', //todo 1
//     'dsa 3 hrs', //todo 2
//     'football 2 hrs' //todo 3
//    ]

  const [todos, setTodos] = useState([]) //initial state of todos array is empty
  const [todoValue, setTodoValue] = useState('') 

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos : newList}))

  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList) //this will update the todo list
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index // if todoindex != index, it is allowed to stay in the array, else removed
    }) 
    persistData(newTodoList)
    setTodos(newTodoList) //this will update the todo list
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)

  }

  //useEffect 
  useEffect(() => {
    if(!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }


    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  
   

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />

      <TodoList handleEditTodo = {handleEditTodo} handleDeleteTodo = {handleDeleteTodo} todos = {todos} />
      
    </>
  )
}

export default App
