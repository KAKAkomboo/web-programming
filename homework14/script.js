const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addButton")
const taskList = document.getElementById("taskList")

document.addEventListener("DOMContentLoaded", loadTask);

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Введіть авданя")
        return;
    }

    createTaskElement(taskText);
    saveTask();
    taskInput.value = "";
}

function createTaskElement(text) {
    const l = document.createElement("l");
    l.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "видалити"
    deleteBtn.classList.add("delete-btn")
    deleteBtn.addEventListener("click", function() {
        l.remove()
        saveTask()
    })

    l.appendChild(deleteBtn)
    taskList.appendChild(l)
}

function saveTask() {
    const task = []
    const listItems = document.querySelectorAll("#taskList l")

    for (let i = 0; i < listItems.length; i++) {
        task.push(listItems[i].textContent.replace("видалити", "").trim())
    }

    localStorage.setItem("task", JSON.stringify(task))
}

function loadTask() {
    const task = JSON.parse(localStorage.getItem("task")) || [];
    task.forEach(task => createTaskElement(task))
}