addEventListener('DOMContentLoaded', () => {

  getTasks();

  document.getElementById('addTodo-button').addEventListener('click', newTask);
  
  let tasks = []
  
  document.getElementById('clear-todoList').addEventListener('click', clearTasks);

  function newTask(e) 
  {
    
    let taskTitle = document.getElementById('todo-title').value;
    let taskDescription = document.getElementById('todo-description').value;
    
    if(taskTitle === "")
    {
      alert('the task must contain a title');
      return;
    }

    // console.log('The TITLE of the new task is: ' + taskTitle + '\n \n and the DESCRIPTION is: ' + taskDescription);


    const task = {
      title: taskTitle, 
      description: taskDescription
    };

    console.log(task);

    // if(localStorage.getItem('Tasks')[0] === null)
    // {
    //   tasks.push(task);
    //   localStorage.setItem('Tasks', JSON.stringify(tasks));
    // } else
    // {
      let tasks = JSON.parse(localStorage.getItem('Tasks'));
      tasks.push(task);   
      localStorage.setItem('Tasks', JSON.stringify(tasks));
    // }

    console.log(tasks);
    e.preventDefault();
    getTasks();
    document.getElementById('todo-title').value = "";
    document.getElementById('todo-description').value = "";
    taskTitle = "";
    taskDescription = "";

  }
  
  function getTasks()
  {
    let newTasks = [];
    newTasks = JSON.parse(localStorage.getItem('Tasks'));
    let renderTasks = document.getElementById('todoTasks');

    renderTasks.innerHTML = '';

    for (let i = 0; i < newTasks.length; i++) 
    {
      let title = newTasks[i].title;
      let description = newTasks[i].description;

      if(description === "")
      {
        renderTasks.innerHTML += `<p>
        ${title}</p>`
      } else 
      {
        renderTasks.innerHTML += `<p>
        ${title} -- ${description}</p>`
      }
    }
  }

  function clearTasks()
  {
    let tasks = JSON.parse(localStorage.getItem('Tasks'));
    tasks = [];
    localStorage.setItem('Tasks', JSON.stringify(tasks));
    getTasks();
  }

})
