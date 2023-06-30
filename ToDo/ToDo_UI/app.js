const tasks_endpoint = "http://127.0.0.1:8000/tasks/"

async function fetchTasks() {
    const response = await fetch(tasks_endpoint);
    const tasks = await response.json();

    return tasks;
}


function renderTaskTemplate(task){
    return `
    <li>
        <div>
            <h1>${task.title}</h1> 
            <p>${task.description}</p>
            <button>${task.completed ? "Undone": "Done"}</button>
        </div>
    </li>
    `;


}

async function main(){
    const tasks = await fetchTasks();
    

    let taskListString = "";
    for (let task of tasks){
        let renderedTaskTtemplateString = renderTaskTemplate(task);
        taskListString += renderedTaskTtemplateString;
    }
    
    document.getElementById("tasksList").innerHTML = taskListString 
}

main();