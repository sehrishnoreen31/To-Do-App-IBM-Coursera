            /* Variables */
const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const clearCompleteButton = document.getElementById('clear-completed');
let tasks = [];

            /*Functions */
function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText !== ''){
        tasks.push({text: taskText});
        taskInput.value = '';
        displayTasks();
    }
}

function displayTasks(){
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for="task-${index}">${task.text}</label>`;
        li.querySelector('input').addEventListener('change', ()=> toogleTask(index));
        taskList.appendChild(li);
    });
}

function toogleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompleteTasks(){
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

addTaskButton.addEventListener('click', addTask);
clearCompleteButton.addEventListener('click', clearCompleteTasks);
displayTasks();