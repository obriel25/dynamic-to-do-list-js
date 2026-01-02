// // Wait for the DOM to fully load before running the script
// document.addEventListener('DOMContentLoaded', function () {

//     // Select required DOM elements
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');

//     // Function to add a new task
//     function addTask() {
//         // Get and trim the input value
//         const taskText = taskInput.value.trim();

//         // Check if input is empty
//         if (taskText === "") {
//             alert("Please enter a task");
//             return;
//         }

//         // Create list item
//         const li = document.createElement('li');
//         li.textContent = taskText;

//         // Create remove button
//         const removeButton = document.createElement('button');
//         removeButton.textContent = "Remove";
//         removeButton.className = "remove-btn";

//         // Remove task when button is clicked
//         removeButton.onclick = function () {
//             taskList.removeChild(li);
//         };

//         // Append button to list item
//         li.appendChild(removeButton);

//         // Append list item to task list
//         taskList.appendChild(li);

//         // Clear input field
//         taskInput.value = "";
//     }

//     // Add task when button is clicked
//     addButton.addEventListener('click', addTask);

//     // Add task when Enter key is pressed
//     taskInput.addEventListener('keypress', function (event) {
//         if (event.key === 'Enter') {
//             addTask();
//         }
//     });
// });
// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Remove the task when the button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to list item
        li.appendChild(removeButton);

        // Append list item to task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add task when the Add Task button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
