import React from 'react'
import TodoCard from './TodoCard'

// here, two props are being passed to TodoCard : 'keys' and 'children'. 
// 'keys' is the unique id for each 'children', and 'children' is everything that is inside the TodoCard tag.
// The 'todos' array is an array of todo items .


export default function TodoList(props) {

    const {todos} = props

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <TodoCard {...props} key={todoIndex} index = {todoIndex}>
                    <p>{todo}</p> 
                </TodoCard>
            )
        })}
        

    </ul>
  )
}
