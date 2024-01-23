// at the top of `data.js`
const BASE_JSON_BIN_URL = "https://api.jsonbin.io/v3/b";
const BIN_ID = "65ae749a1f5677401f22ee76";
const MASTER_KEY ="$2a$10$vhPTR88iTO1ut.eKZipMkOqLs45x4DwSAiMgJS.46FSGha5epB1Se";


let todos = [];
//let todos = await loadTasks(); 
function addTodo(todos, name, urgency) {
    let newTodo = {
        // id is unique
        id: Math.floor(Math.random() * 100 + 1), // Random number from 1 - 100
        name: name,
        urgency: urgency
    };
   // alert("todoadd")
    todos.push(newTodo);
}

function modifyTask(todos, id, newTaskName, newUrgency) { // id = 30
    let task = null;

    for (let t of todos) {
        if (t.id == id) {
            task = t;
            break
        }
    }

    if (task) {
        task.name = newTaskName;
        task.urgency = newUrgency;
    } else {
        console.log("Task is not found modify");
    }
}

function deleteTask(todos, id) { 
    let indexToDelete = null; 
    // loop through todos array
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            indexToDelete = i;
        }
    }

    // deleting of item from todos array
    if (indexToDelete !== null) {
        todos.splice(indexToDelete, 1);
    } else {
        console.log("Task is not found delete");
    }
}


function deleteAllTaskWithId(todos, id) {
    let indexToDeleteArray = []

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            indexToDeleteArray.push(i)
        }
    }

    for (let i = indexToDeleteArray.length - 1; i >= 0; i--) {
        let indexToDelete = indexToDeleteArray[i]
        todos.splice(indexToDelete, 1);
    }
    
}


// ...add at the end of `data.js`
async function loadTasks() {
    const response = await axios.get(BASE_JSON_BIN_URL + "/" + BIN_ID + "/latest");
    console.log(response.data) 
    return response.data.record;
  }

  async function saveTasks(todos) {
    const response = await axios.put(`${BASE_JSON_BIN_URL}/${BIN_ID}`, todos, {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": MASTER_KEY
      }
    });
    console.log('savetask') 
    console.log(response.data) 
    return response.data;
  
  }

  