document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("text");
    const addButton = document.getElementById("button");
    const taskList = document.querySelector(".icons");


    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.className = "icons__card";

        const taskTitle = document.createElement("p");
        taskTitle.className = "icons__title";
        taskTitle.textContent = taskText;

        const iconDiv = document.createElement("div");
        iconDiv.className = "icon";

        const checkButton = document.createElement("button");
        checkButton.className = "check";
        checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkButton.addEventListener("click", () => {
            taskTitle.classList.toggle("completed");
        });

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        iconDiv.appendChild(checkButton);
        iconDiv.appendChild(deleteButton);

        taskItem.appendChild(taskTitle);
        taskItem.appendChild(iconDiv);

        taskList.appendChild(taskItem);

        taskInput.value = "";
    }

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
