document.addEventListener("DOMContentLoaded", function () {
    // all the code here
  async function main() {
        let todos = await loadTasks(); // store all the todos
    
        // Event listeners
        const form = document.querySelector("#todo-form");
        form.addEventListener('submit', function(event) {
          event.preventDefault(); // This stops the form from being submitted the traditional way
    
          const taskNameInput = document.querySelector("#taskName");
          const taskName = taskNameInput.value;
    
          const taskUrgencySelect = document.querySelector("#taskUrgency");
          const taskUrgency = taskUrgencySelect.value;
    
          if (taskName) {
            addTodo(todos, taskName, taskUrgency);
            renderTodos(todos);
            saveTasks(todos);
            taskNameInput.value = '';
          }
        });
        
        const saveButton = document.querySelector("#save-btn");
        saveButton.addEventListener("click", async function() {
            console.log('todos',todos) 
            saveTasks(todos);
        })
       
        const todoList = document.querySelector("#todoList");
        todoList.addEventListener('click', function(event) {
            // Check if the clicked element is the 'Edit' button
            if (event.target.classList.contains('edit-btn')) {
                const todoId = parseInt(event.target.dataset.taskId);
                const todo = todos.find(t => t.id === todoId);
        
                const newName = prompt("Enter the new task name: ", todo.name);
                const newUrgency = prompt("Enter the new urgency:", todo.urgency);
        
                modifyTask(todos, todo.id, newName, newUrgency);
                renderTodos(todos);
            }
        
            // Check if the clicked element is the 'Delete' button
            if (event.target.classList.contains('delete-btn')) {
                const todoId = parseInt(event.target.dataset.taskId);
        
                const confirmDelete = confirm("Are you sure you want to delete this task?");
                if (confirmDelete) {
                    deleteTask(todos, todoId);
                    renderTodos(todos);
                }
            }
        });
        
    }
    
    
    function addSampleTasks() {
        addTodo(todos, "Walk the dog", "low")
        addTodo(todos, "Clean the room", "medium");
        addTodo(todos, "Pay the bill", "high");
    }


    function renderTodos(todos) {
        const todoList = document.querySelector("#todoList");
        // clearing old todo list
        todoList.innerHTML = '';

        for (let todo of todos) {

            // loop through todos and create li element with todo details
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                    ${todo.name} <span class="badge bg-primary">${todo.urgency}</span>
                    <button data-task-id=${todo.id} class="btn edit-btn btn-success btn-sm">Edit</button>
                    <button data-task-id=${todo.id} class="btn delete-btn btn-danger btn-sm">Delete</button>
                  `;
            todoList.appendChild(li);

        }
    }


    addSampleTasks() 
    renderTodos(todos)
    main();
});





































// Sanity check
// console.log("hello is linked")
// alert("Hello!")

// DOM = Document Object Model

// DOM Manipulation
// const btn = document.querySelector("#dom-btn") // # => id
// btn.addEventListener("click", function() {
//     alert("button is clicked")
// })
