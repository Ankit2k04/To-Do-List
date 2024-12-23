let button = document.querySelector(".add");
let todoInput = document.querySelector(".input-area");
const addTask = ()=>{
    let todoText = todoInput.value.trim();
    if(todoText === ''){
        alert("enter task to add");
        return;
    }
    const taskList = document.querySelector('.tasks');
    const taskItem = document.createElement('li');
    taskItem.textContent = todoText;

    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = '✖';
    deleteButton.title="delete task";
    deleteButton.onclick = () => {
        taskList.removeChild(taskItem);
      
    };

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    todoInput.value='';
}

button.addEventListener('click',addTask);

todoInput.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        addTask();
    }
})
