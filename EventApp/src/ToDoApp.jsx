import "./EventToDo.css";
export default function EventToDo(){
    const[task,setTask]=useState("");
    const[tasks,setTasks]=useState([]);
    function handleSubmit(e){
        e.preventDefault();
        const taskValue=task.trim(); 
        if(taskValue===""){
            alert("task can not be empty");
            return;
        }
        setTask((prevTask)=>[...prevTask,taskValue])
        setTask("");
    }
    function handleClickList(e){
       if(e.target.className==="deleteBtn"){
        e.target.parentElement.remove();
       } 
    }
    return(
        <>
        <h1> To Do List</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Add your task here"/>
        <button type="submit">Add Task</button>
        </form>
        <ul id="taskList" onClick={handleClickList}>
            <li></li>
        </ul>
        </>
    );
}