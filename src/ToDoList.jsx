import React, {useState} from "react";

function ToDoList(){
    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");
    
    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleAddTask = () => {
            if(newTask.trim() !== ""){
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask("");
        }
    }

    const handleRemoveTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    const moveTaskUp = (index) => {
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = 
            [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const moveTaskDown = (index) => {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] =
            [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
    <>
        <div className="to-do-list">
            <h1>To-do list</h1>

            <div>
                <input 
                    type="text"
                    onChange={handleInputChange}
                    id="task-input"
                    value={newTask}
                    placeholder="Enter new task"
                />
                <button className="add-button" onClick={handleAddTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => <li key={index}>
                                                    <span className="text">{task}</span>
                                                    <button 
                                                    className="delete-button"
                                                    onClick={() => handleRemoveTask(index)}>
                                                        Delete
                                                    </button>
                                                    <button
                                                    className="move-button"
                                                    onClick={() => moveTaskUp(index)}>
                                                        Move UP
                                                    </button>
                                                    <button 
                                                    className="move-button"
                                                    onClick={() => moveTaskDown(index)}>
                                                        Move Down
                                                    </button>
                                            </li>)}
            </ol>
        </div>
    </>)
}

export default ToDoList