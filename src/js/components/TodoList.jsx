import React,{useState} from "react";

const TodoList = () => {
    const[tasks,setTasks]=useState([]);
    const[newTask,setNewTask]=useState("");
    

    const handleSubmit=e =>{
        e.preventDefault()
        newTask.trim() && setTasks([...tasks, newTask])
        setNewTask("");
    }
    const handleDelete = index => setTasks(tasks.filter((_,i) => i !== index))
    return(
        <div>
        <h1>TodoList</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTask} onChange={(e) =>setNewTask(e.target.value)} placeholder="Escribe..."/>
        </form>
        <div>
            {tasks.length === 0 ?(
                <p>
                    Añade mas
                </p>
            ) : (
                tasks.map((task, index)=>(
                    <div key={index}>
                        <span>
                            {task}
                        </span>
                        <button onClick={()=> handleDelete(index)}>
                        x
                        </button>
                    </div>
                )
            )
            )}
        </div>
        </div>
    )
}
export default TodoList