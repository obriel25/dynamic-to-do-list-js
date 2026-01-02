document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

        storedTasks.forEach(function (taskText) {
            addTask(taskText, false);
        });
    }

    // Function to add a new task
    function addTask(taskText = null, save = true) {

        if (taskText === null) {
            taskText = taskInput.value.trim();
        }

        if (taskText === "") {
            alert("Please enter a task");
        } else {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            removeButton.onclick = function () {
                taskList.removeChild(li);

                // Update Local Storage after removal
                let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks = storedTasks.filter(function (task) {
                    return task !== taskText;
                });
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            };

            li.appendChild(removeButton);
            taskList.appendChild(li);

            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }

            taskInput.value = "";
        }
    }

    // Add task on button click
    addButton.addEventListener('click', function () {
        addTask();
    });

    // Add task on Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke loading of tasks
    loadTasks();

});
