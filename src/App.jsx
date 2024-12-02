import React, { useState } from 'react'

import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store/counterSlice'
import { addTask } from './store/todoSlice'
import TodoList from './components/TodoList'

const App = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [id, setId] = useState(0)
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')

    return (
        <div className="App">
            <div className="counter">
                <h1 className='count-text'>{count}</h1>
                <div className="buttons">
                    <button className='button' onClick={() => dispatch(decrement())}>- 1</button>
                    <button className='button' onClick={() => dispatch(increment())}>+ 1</button>
                </div>
            </div>
            <div className="todo">
                <div className="inputs">
                    <input type="text" placeholder='Введите задачу' value={title} onChange={e => setTitle(e.target.value)} className='task-input' />
                    <input type="time" placeholder='Введите время' value={time} onChange={e => setTime(e.target.value)} className='task-input' />
                    <button onClick={() => {
                        dispatch(addTask({id, title, time}));
                        setTitle('');
                        setTime('');
                        }} className='task-input button'>Добавить</button>
                </div>
                <TodoList/>
            </div>
        </div>
    );
}

export default App;
