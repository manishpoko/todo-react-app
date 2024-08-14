import React from 'react'


//TodoList is the parent of TodoCard.
//TodoCard component receives the 'props' object and deconstructs it to get the 'children' prop. It then renders these children within its structure
//The actual todo text is passed from TodoList to TodoCard as children, and not as a named prop.
//for each 'todo' item in the array, a TodoCard is created by the TodoList component. The text of the 'todo' is wrapped in a <p> tag and passed as children to todoCard, which renders them within its <li> structure.

export default function TodoCard(props) {

    const {children, handleDeleteTodo, index, handleEditTodo} = props
  return (
    <li className="todoItem" >
        {children}
      <div className='actionsContainer'>

            <button onClick={() => {
                handleEditTodo(index)
            }}>
            <i className="fa-solid fa-pen-to-square"></i>
            </button>

            <button onClick= {() =>{
                handleDeleteTodo(index)
            }}>
            <i className="fa-solid fa-trash"></i>
            </button>

      </div>
    </li>
  );
}
