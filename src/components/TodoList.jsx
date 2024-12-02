import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const tasks = useSelector((state) => state.todos.taskList)


    const conl = () => {
        return(console.log(tasks))
    }
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className='task-elem'>
                    <p className='task-id task-text'>{task.id}</p>
                    <p className='task-title task-text'>{task.title}</p>
                    <p className='task-time task-text'>{task.time}</p>
                </li>
            ))}
            <button onClick={conl}>1232134213</button>
        </div>
    )
}


export default TodoList;