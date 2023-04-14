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
