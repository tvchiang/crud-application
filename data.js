let todos = [
    {
        "id": 50,
        "name": "Wash Toilet",
        "urgency": 10
    },
    {
        "id": 50,
        "name": "Mop Floor",
        "urgency": 10
    },
    {
        "id": 14,
        "name": "Wash Dishes",
        "urgency": 7
    }
];

function addTodo(todos, name, urgency) {
    let newTodo = {
        // id is unique
        id: Math.floor(Math.random() * 100 + 1), // Random number from 1 - 100
        name: name,
        urgency: urgency
    };
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
        console.log("Task is not found");
    }
}

function deleteTask(todos, id) { // id = 50
    let indexToDelete = null; // 0

    // loop through todos array
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            indexToDelete = i;
            break;
        }
    }

    // deleting of item from todos array
    if (indexToDelete !== null) {
        todos.splice(indexToDelete, 1);
    } else {
        console.log("Task is not found");
    }
}