// document.addEventListener("DOMContentLoaded", function() {
//     const addTaskBtn = document.getElementById("addTaskBtn");
//     addTaskBtn.addEventListener("click", addTask);
// });

// function addTask() {
//     const taskName = document.getElementById("taskName").value;
//     if (taskName.trim() === "") {
//         return;
//     }

//     const taskItem = document.createElement("li");
//     taskItem.innerHTML = `
//         <span>${taskName}</span>
//         <button class="addSubTaskBtn">Add Sub-Task</button>
//     `;

//     const addSubTaskBtn = taskItem.querySelector(".addSubTaskBtn");
//     addSubTaskBtn.addEventListener("click", addSubTask);

//     document.getElementById("taskList").appendChild(taskItem);
//     document.getElementById("taskName").value = "";
// }

// function addSubTask(event) {
//     const subTaskName = prompt("Enter sub-task name:");
//     if (subTaskName !== null && subTaskName.trim() !== "") {
//         const subTaskItem = document.createElement("li");
//         subTaskItem.textContent = subTaskName;
//         event.target.parentNode.appendChild(subTaskItem);
//     }
// }


document.addEventListener("DOMContentLoaded", function() {
    const addTaskBtn = document.getElementById("addTaskBtn");
    addTaskBtn.addEventListener("click", addTask);
});

let taskIdCounter = 1; // Counter for generating unique IDs

// function addTask() {
//     const taskName = document.getElementById("taskName").value;
//     if (taskName.trim() === "") {
//         return;
//     }

//     const taskId = `${taskIdCounter}`;
//     const taskItem = createTaskElement(taskId, taskName);
//     document.getElementById("taskList").appendChild(taskItem);
//     document.getElementById("taskName").value = "";

//     taskIdCounter++;
// }

// function createTaskElement(taskId, taskName) {
//     const taskItem = document.createElement("li");
//     taskItem.setAttribute("data-task-id", taskId);
//     taskItem.innerHTML = `
//         <span>${taskId}${taskName}</span>
//         <button class="addSubTaskBtn">Add Sub-Task</button>
//     `;

//     const addSubTaskBtn = taskItem.querySelector(".addSubTaskBtn");
//     var subtaskcount = 1;
//     addSubTaskBtn.addEventListener("click", function() {
//         const subTaskName = prompt("Enter sub-task name:");
//         if (subTaskName !== null && subTaskName.trim() !== "") {
//             const subTaskId = `${taskId}-${subtaskcount}`;
//             const subTaskItem = createTaskElement(subTaskId, subTaskName);
//             taskItem.appendChild(subTaskItem);
//             subtaskcount++;
            
//         }
//     });

//     return taskItem;
// }
document.addEventListener("DOMContentLoaded", function () {
    const addTaskBtn = document.getElementById("addTaskBtn");
    addTaskBtn.addEventListener("click", addTask);
  });
  
  function addTask() {
    const taskName = document.getElementById("taskName").value;
    if (taskName.trim() === "") {
      return;
    }
  
    const taskItem = createTaskElement(taskName);
    document.getElementById("taskList").appendChild(taskItem);
    document.getElementById("taskName").value = "";
  }
  
  function createTaskElement(taskName) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
          <span>${taskName}</span>
          <button class="addSubTaskBtn">Add Sub-Task</button>
          <button class="editTaskBtn">Edit</button>
          <button class="deleteTaskBtn">Delete</button>
          <ul class="subTaskList"></ul>
      `;
  
    const addSubTaskBtn = taskItem.querySelector(".addSubTaskBtn");
    addSubTaskBtn.addEventListener("click", function () {
      openSubTaskInput(taskItem.querySelector(".subTaskList"), 0);
    });
  
    const editTaskBtn = taskItem.querySelector(".editTaskBtn");
    editTaskBtn.addEventListener("click", function () {
      openEditModal(taskItem.querySelector("span"), "task");
    });
  
    const deleteTaskBtn = taskItem.querySelector(".deleteTaskBtn");
    deleteTaskBtn.addEventListener("click", function () {
      taskItem.remove();
    });
  
    return taskItem;
  }
  
  function openSubTaskInput(subTaskList, currentLevel) {
    if (currentLevel < 2) {
      const subTaskInput = document.createElement("input");
      subTaskInput.setAttribute("type", "text");
      subTaskInput.setAttribute(
        "placeholder",
        `Enter sub-task level ${currentLevel + 2} name...`
      );
  
      const addSubTaskBtn = document.createElement("button");
      addSubTaskBtn.textContent = "Add";
      addSubTaskBtn.addEventListener("click", function () {
        const subTaskName = subTaskInput.value.trim();
        if (subTaskName !== "") {
          const subTaskItem = createSubTaskElement(subTaskName, currentLevel + 1);
          subTaskList.appendChild(subTaskItem);
          subTaskInput.remove();
          addSubTaskBtn.remove();
        }
      });
  
      subTaskList.appendChild(subTaskInput);
      subTaskList.appendChild(addSubTaskBtn);
    }
  }
  
  function createSubTaskElement(subTaskName, currentLevel) {
    const subTaskItem = document.createElement("li");
    subTaskItem.innerHTML = `
    <span>${subTaskName}</span>
          <button class="addSubTaskBtn">Add Sub-Task</button>
          <button class="editSubTaskBtn">Edit</button>
          <button class="deleteSubTaskBtn">Delete</button>
          <ul class="subTaskList"></ul>
      `;
  
    const addSubTaskBtn = subTaskItem.querySelector(".addSubTaskBtn");
    addSubTaskBtn.addEventListener("click", function () {
      openSubTaskInput(subTaskItem.querySelector(".subTaskList"), currentLevel);
    });
  
    const editSubTaskBtn = subTaskItem.querySelector(".editSubTaskBtn");
    editSubTaskBtn.addEventListener("click", function () {
      openEditModal(subTaskItem.querySelector("span"), "sub-task");
    });
  
    const deleteSubTaskBtn = subTaskItem.querySelector(".deleteSubTaskBtn");
    deleteSubTaskBtn.addEventListener("click", function () {
      subTaskItem.remove();
    });
  
    return subTaskItem;
  }
  
  function openEditModal(element, itemType) {
    // Similar to previous implementation
    // ...
  }
  