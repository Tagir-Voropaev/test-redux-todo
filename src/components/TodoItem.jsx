import React from 'react'

const TodoItem = ({ id, text, completed, toggleTodoComplete, removeTodo }) => {
    return (
        <li className='task-container'>
            <input type="checkbox" checked={completed} onChange={() => toggleTodoComplete(id)} className='checkbox' />
            <span className='task-text'>{text}</span>
            <span className='delete' onClick={() => removeTodo(id)}>&times;</span>
        </li>
    )
}

export default TodoItem
