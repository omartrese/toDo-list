
  // getTasks();
  // document.getElementById('addTodo-button').addEventListener('click', newTask);
  
  // const clearTaskButton = document.getElementById('clear-todoList');
  // let tasks = []
  // let removeButtons = document.querySelectorAll('.removeTask');

  // function newTask(e) 
  // {
    
  //   let taskTitle = document.getElementById('todo-title').value;
  //   let taskDescription = document.getElementById('todo-description').value;
    
  //   if(taskTitle === "")
  //   {
  //     alert('the task must contain a title');
  //     return;
  //   }

  //   // console.log('The TITLE of the new task is: ' + taskTitle + '\n \n and the DESCRIPTION is: ' + taskDescription);


  //   const task = {
  //     title: taskTitle, 
  //     description: taskDescription
  //   };

  //   console.log(task);

  //   // if(localStorage.getItem('Tasks')[0] === null)
  //   // {
  //   //   tasks.push(task);
  //   //   localStorage.setItem('Tasks', JSON.stringify(tasks));
  //   // } else
  //   // {
  //     let tasks = JSON.parse(localStorage.getItem('Tasks'));
  //     tasks.push(task);   
  //     localStorage.setItem('Tasks', JSON.stringify(tasks));
  //   // }

  //   console.log(tasks);
  //   e.preventDefault();
  //   getTasks();
  //   document.getElementById('todo-title').value = "";
  //   document.getElementById('todo-description').value = "";
  //   taskTitle = "";
  //   taskDescription = "";
  // }
  
  // clearTaskButton.addEventListener('click', () => {
  //   let tasks = JSON.parse(localStorage.getItem('Tasks'));
  //   tasks = [];
  //   localStorage.setItem('Tasks', JSON.stringify(tasks));
  //   getTasks();
  // });

  // function deleteTask(title) 
  // {
  //   let tasks = JSON.parse(localStorage.getItem('Tasks'));
  //   console.log(title);
  //   for(let i = 0; i < tasks.length; i++) {
  //     let taskTitle = tasks[i].title;
  //     console.log("comprobacion: " + taskTitle);
  //     console.log("tarea a eliminar: " + title);
  //     if(title === taskTitle) {
  //       tasks.splice(i, 1);
  //     }
  //   }
  //   localStorage.setItem('Tasks', JSON.stringify(tasks));
  //   getTasks();
  // }

  // function getTasks()
  // {
  //   let newTasks = JSON.parse(localStorage.getItem('Tasks'));
  //   let renderTasks = document.getElementById('todoTasks');
    
  //   renderTasks.innerHTML = '';
    
  //   for (let i = 0; i < newTasks.length; i++) 
  //   {
  //     let title = newTasks[i].title;
  //     let description = newTasks[i].description;
      
  //     if(description === "")
  //     {
  //       renderTasks.innerHTML += `<p>
  //       ${title}
  //       <button class="removeTask" onclick="deleteTask('${title}')"> X </button>
  //       </p>`
  //     } else 
  //     {
  //       renderTasks.innerHTML += `<p>
  //       ${title} -- ${description}
  //       <button class="removeTask" onclick="deleteTask('${title}')"> X </button>
  //       </p>`
  //     }
      
  //   }
  //   console.log(document.querySelectorAll('.removeTask').length);
  // }
  
// Almacenar referencias a los elementos del DOM
const titleInput = document.getElementById('todo-title');
const descriptionInput = document.getElementById('todo-description');
const clearTaskButton = document.getElementById('clear-todoList');

// Obtener tareas del localStorage
let tasks = JSON.parse(localStorage.getItem('Tasks')) || [];

// Agregar evento click al botón "Agregar tarea"
document.getElementById('addTodo-button').addEventListener('click', () => {
  const title = titleInput.value;
  const description = descriptionInput.value;
  
  if (title === "") {
    alert('La tarea debe tener un título');
    return;
  }

  const task = { title, description };
  tasks.push(task);
  localStorage.setItem('Tasks', JSON.stringify(tasks));
  
  titleInput.value = "";
  descriptionInput.value = "";
  getTasks();
});

// Agregar evento click al botón "Borrar tareas"
clearTaskButton.addEventListener('click', () => {
  tasks = [];
  localStorage.setItem('Tasks', JSON.stringify(tasks));
  getTasks();
});

// Función para eliminar una tarea
function deleteTask(title) {
  tasks = tasks.filter(task => task.title !== title);
  localStorage.setItem('Tasks', JSON.stringify(tasks));
  getTasks();
}

// Función para renderizar la lista de tareas
function getTasks() {
  const taskList = document.getElementById('todoTasks');
  taskList.innerHTML = '';
  
  for (const task of tasks) {
    const { title, description } = task;
    const taskHTML = description ? `${title} -- ${description}` : title;
    taskList.innerHTML += `
      <p>
        ${taskHTML}
        <button class="removeTask" onclick="deleteTask('${title}')">X</button>
      </p>
    `;
  }
  
  console.log(document.querySelectorAll('.removeTask').length);
}

// Renderizar la lista de tareas al cargar la página
getTasks();
