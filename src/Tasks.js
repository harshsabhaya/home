import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4'

const TASK_STORAGE_KEY = "TASK_STORAGE_KEY"
const storeTasks = (taskMap) => {
    localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(taskMap))
}

const readStoredTask = () => {
    const results = JSON.parse(localStorage.getItem(TASK_STORAGE_KEY))
    return results ? results : { tasks: [], completedTask: []}
}

function Tasks ()  {
    const [taskText, setTaskText] = useState('')
    const storedTask = readStoredTask()
    const [tasks, setTasks] = useState(storedTask.tasks)
    const [completedTask, setCompletedTask] = useState(storedTask.completedTask)

    useEffect(() => {
      storeTasks({tasks, completedTask})
    })
    
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