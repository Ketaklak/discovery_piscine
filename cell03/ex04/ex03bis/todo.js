
function loadTasks() {
    const taskCookie = getCookie('tasks');
    if (taskCookie) {
        const tasks = JSON.parse(taskCookie);
        tasks.forEach(task => addTaskToDOM(task));
    }
}

function saveTasks() {
    const taskDivs = $('#ft_list div');
    const tasks = taskDivs.map((_, div) => $(div).text()).get();
    document.cookie = `tasks=${JSON.stringify(tasks)};path=/`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function createTask() {
    const taskText = prompt('Entrer une nouvelle tache:');
    if (taskText && taskText.trim() !== '') {
        addTaskToDOM(taskText);
        saveTasks();
    }
}

function addTaskToDOM(taskText) {
    const taskDiv = $('<div>').text(taskText);
    taskDiv.on('click', function () {
        if (confirm('VEut tu vraiment supprimer la tache ?')) {
            taskDiv.remove();
            saveTasks();
        }
    });
    $('#ft_list').prepend(taskDiv);
}

$(document).ready(function() {
    loadTasks();
    $('#newTaskBtn').on('click', createTask);
});
