addEventListener('DOMContentLoaded', () => {

  if(JSON.parse(localStorage.getItem('Tasks').length === null))
  {
    return;
  } else getTasks();
  document.getElementById('addTodo-button').addEventListener('click', newTask);
  
  const clearTaskButton = document.getElementById('clear-todoList');
  let tasks = []
  let removeButtons = document.querySelectorAll('.removeTask');

  for(let i = 0; i < removeButtons.length; i++)
  {
    removeButtons[i].addEventListener('click', () => {

      console.log(removeButtons[i]);
      let tasks = JSON.parse(localStorage.getItem('Tasks'));

      for(let j = 0; j < tasks.length; j++)
      {
        tasks.splice(j, tasks.length);
      }
      localStorage.setItem('Tasks', JSON.stringify(tasks));
      getTasks();
    })
  }

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
  
  clearTaskButton.addEventListener('click', () => {
    let tasks = JSON.parse(localStorage.getItem('Tasks'));
    tasks = [];
    localStorage.setItem('Tasks', JSON.stringify(tasks));
    getTasks();
  });

  function deleteTask(title) 
  {
    console.log(title);
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++) {
      if(tasks[i].title === title) {
        tasks.splice(i, 1);
      }
    }
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  }

  function getTasks()
  {
    let newTasks = JSON.parse(localStorage.getItem('Tasks'));
    let renderTasks = document.getElementById('todoTasks');
    
    renderTasks.innerHTML = '';
    
    for (let i = 0; i < newTasks.length; i++) 
    {
      let title = newTasks[i].title;
      let description = newTasks[i].description;
      
      if(description === "")
      {
        renderTasks.innerHTML += `<p>
        ${title}
        <a href="#" class="removeTask"> X </button>
        </p>`
      } else 
      {
        renderTasks.innerHTML += `<p>
        ${title} -- ${description}
        <a href="#" class="removeTask"> X </button>
        </p>`
      }
      
    }
    console.log(document.querySelectorAll('.removeTask').length);
  }
  

})