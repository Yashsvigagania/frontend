//import "./EventToDo.css";
export default function EventToDo(){
    // function handleClick(name){
    //     alert(`Button pressed by ${name}`)
    // }
    function handleSubmit(e){
        e.preventDefault();
        const input=e.target.task; //hold the value
        const taskValue=input.value.trim(); 
        if(taskValue===""){
            alert("task can not be empty");
            return;
        }
        //React code
        const li=document.createElement("li"); //li tag so that it shows list is html
        li.innerHTML=`<span>${taskValue}</span> 
        <button class="deleteBtn">Delete</button>`;
        document.getElementById("taskList").appendChild(li);
    }
    function handleClickList(e){
       if(e.target.className==="deleteBtn"){
        e.target.parentElement.remove();
       } 
    }
    return(
        <>
        {/* <h1>Event Hanling</h1>
        <button onClick={()=>handleClick("Yashsvi")}>Click Me</button>  */}
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
//No round bracket for function in handleClick
//{()=>handleClick("KIET")}
//e is the event 
//id id used when we want to delete
//page should not reload we use e.preventDefault