import React, { useState } from 'react';
import uuid from 'uuid/v4'

function Tasks ()  {
    const [taskText, setTaskText] = useState('')
    const [tasks, setTasks] = useState([])
    const [completedTask, setCompletedTask] = useState([])
    
    const updateTaskText = event => {
        setTaskText(event.target.value)
    }

    const addTask = () => {
        setTasks([...tasks, {text: taskText, id: uuid() }])
        emptyInputField()
    }

    const emptyInputField = () => setTaskText("")

    const handleCompleteTask = task => () => {
        setCompletedTask([...completedTask, task])
        setTasks(tasks.filter(t => t.id !== task.id))
    }

    const handleRemoveTask = task => () => {
        setCompletedTask(completedTask.filter(t => t.id !== task.id))
    }

    return (
        <div>
            <h3>Tasks</h3>
            <div className='form'>
                <input 
                    value={taskText} 
                    onChange={updateTaskText} 
                    onKeyDown={e => (e.key === 'Enter' ? addTask() : null)}
                />
                <button onClick={addTask}>Add Task</button>
                <div className='task-list'>
                    {tasks.map(task => {
                        const {id, text} = task
                        return <div key={id} onClick={handleCompleteTask(task)}>{text}</div>
                    })}
                </div>
                <div className='completed-list'>
                    {completedTask.map(task => {
                        const { id, text } = task
                        return (
                            <div key={id}>
                                {text}{" "} 
                                <span style={{cursor: "pointer"}}onClick={handleRemoveTask(task)}>
                                    X
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Tasks