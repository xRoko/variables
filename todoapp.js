/*
Description: Build a terminal-based to-do list app.

Features:
Add tasks.
View all tasks.
Mark tasks as done or remove them.
Focus: Use loops for displaying tasks and conditions for actions (e.g., checking if the task list is empty before showing tasks).
*/

const prompt = require('prompt-sync')();

let tasks = [];

function displayTasks() {
    if (tasks.length === 0) {
        console.log('Your task list is empty.');
    } else {
        console.log('\nYour Tasks:');
        tasks.forEach((task, index) => {
            const status = task.done ? '[Done]' : '[Pending]';
            console.log(`${index + 1}. ${task.description} ${status}`);
        });
    }
}

function addTask() {
    const taskDescription = prompt('Enter task description: ');
    tasks.push({ description: taskDescription, done: false });
    console.log('Task added successfully.');
}

function markTaskAsDone() {
    displayTasks();
    const taskIndex = parseInt(prompt('Enter the number of the task to mark as done: ')) - 1;

    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks[taskIndex].done = true;
        console.log('Task marked as done.');
    } else {
        console.log('Invalid task number.');
    }
}

// Function to remove a task
function removeTask() {
    displayTasks();
    const taskIndex = parseInt(prompt('Enter the number of the task to remove: ')) - 1;

    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks.splice(taskIndex, 1);
        console.log('Task removed successfully.');
    } else {
        console.log('Invalid task number.');
    }
}

// Function to display the main menu and prompt the user for an action
function showMenu() {
    console.log('\nTo-Do List Application');
    console.log('1. View all tasks');
    console.log('2. Add a new task');
    console.log('3. Mark a task as done');
    console.log('4. Remove a task');
    console.log('5. Exit');

    const choice = prompt('Choose an option (1-5): ');

    switch (choice) {
        case '1':
            displayTasks();
            break;
        case '2':
            addTask();
            break;
        case '3':
            markTaskAsDone();
            break;
        case '4':
            removeTask();
            break;
        case '5':
            console.log('Goodbye!');
            process.exit(); // Exit the application
        default:
            console.log('Invalid option. Please try again.');
    }

    // Loop back to the menu after performing an action
    showMenu();
}

// Start the app
showMenu();
