document.addEventListener('DOMContentLoaded', () => {
  const taskTitleInput = document.getElementById('todo-title');
  const taskDescriptionInput = document.getElementById('todo-description');
  const taskList = document.getElementById('todoTasks');
  const addTaskButton = document.getElementById('addTodo-button');
  const clearTaskButton = document.getElementById('clear-todoList');
  const removeTasks = document.querySelectorAll('.removeTask');

  addTaskButton.addEventListener('click', () => {
    const taskTitle = taskTitleInput.value.trim();
    const taskDescription = taskDescriptionInput.value.trim();

    if (!taskTitle) {
      alert('The task must contain a title');
      return;
    }

    const task = { 
      title: taskTitle, 
      description: taskDescription 
    };
    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    saveTasksToLocalStorage(tasks);

    clearTaskInputs();
    renderTasks(tasks);
  });

  clearTaskButton.addEventListener('click', () => {
    saveTasksToLocalStorage([]);
    renderTasks([]);
  });

  function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem('Tasks')) || [];
  }

  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  }

  function clearTaskInputs() {
    taskTitleInput.value = '';
    taskDescriptionInput.value = '';
  }

  function delTask(title) {
    console.log("has pulsado el boton de eliminar tarea");
    let tasks = [];
    tasks = getTasksFromLocalStorage();
  
    for (let i = 0; i < tasks.length; i++) {
      console.log(title);
      if (tasks[i].title === title) {
        tasks.splice(i, 1);
      }
    }
  
    renderTasks(tasks);
    saveTasksToLocalStorage(tasks);
  }
  
  
  function renderTasks(tasks) {

    taskList.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) 
    {
      let title = tasks[i].title;
      let description = tasks[i].description;

      if(description === "")
      {
        taskList.innerHTML += `<p>
        ${title} <a href="#" onclick="delTask('${title}')" class="removeTask" > X </a> </p>`
      } else 
      {
        taskList.innerHTML += `<p>
        ${title} -- ${description}</p>`
      }

    }
  }

  renderTasks(getTasksFromLocalStorage());
});
