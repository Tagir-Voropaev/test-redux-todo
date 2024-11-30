import React from 'react'

const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <label htmlFor="" className='form-box'>
            <input type="text" className='add-task form-item' value={text} onChange={(e) => handleInput(e.target.value)} />
            <button onClick={handleSubmit} className='submit-task form-item'>Add ToDo</button>
        </label>
    )
}

export default InputField