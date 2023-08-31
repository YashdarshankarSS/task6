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


// document.addEventListener("DOMContentLoaded", function() {
//     const addTaskBtn = document.getElementById("addTaskBtn");
//     addTaskBtn.addEventListener("click", addTask);
// });

// let taskIdCounter = 1; // Counter for generating unique IDs

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


//////////////////////newest
document.addEventListener("DOMContentLoaded", function () {
  const addTaskBtn = document.getElementById("addTaskBtn");
  addTaskBtn.addEventListener("click", addTask);
});

function addTask() {
  
  const taskName = document.getElementById("taskName").value;
  taskId = `{ParentID}`;
  const taskItem = createTaskElement(taskName,taskId);
  document.getElementById("taskList").appendChild(taskItem);
  document.getElementById("taskName").value = "";
}

function createTaskElement(taskName, taskId) {
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
          <span>${taskId} - ${taskName}</span>
          <button class="addSubTaskBtn">Add Sub-Task</button>
          <button class="editTaskBtn">Edit</button>
          <button class="deleteTaskBtn">Delete</button>
          <ul class="subTaskList"></ul>
      `;

  const addSubTaskBtn = taskItem.querySelector(".addSubTaskBtn");
  addSubTaskBtn.addEventListener("click", function () {
    openSubTaskInput(taskItem.querySelector(".subTaskList"), 0, "ParentID");
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
var subtaskCounter = 1;
newId = ``;
function openSubTaskInput(subTaskList, currentLevel, OuterId) {
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
        newId = `${OuterId} - ${subtaskCounter}`;
        subtaskCounter++;
        const subTaskItem = createSubTaskElement(subTaskName, currentLevel + 1, newId);
        subTaskList.appendChild(subTaskItem);
        subTaskInput.remove();
        addSubTaskBtn.remove();
      }
    });

    subTaskList.appendChild(subTaskInput);
    subTaskList.appendChild(addSubTaskBtn);
  }
}


function createSubTaskElement(subTaskName, currentLevel, subTaskId) {
  const subTaskItem = document.createElement("li");
  subTaskItem.innerHTML = `
    <span> ${subTaskId} - ${subTaskName}</span>
    <button class="addSubTaskBtn">Add Sub-Task</button>
    <button class="editSubTaskBtn">Edit</button>
    <button class="deleteSubTaskBtn">Delete</button>
    <ul class="subTaskList"></ul>
  `;

  subtaskCounter++;

  const addSubTaskBtn = subTaskItem.querySelector(".addSubTaskBtn");

  if (currentLevel >= 2) {
    addSubTaskBtn.style.display = "none"; // Hide the button
  }

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
  const modal = document.createElement("div");
  modal.classList.add("edit-modal");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.value = element.textContent.trim();

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", function () {
    const newValue = input.value.trim();
    if (newValue !== "") {
      element.textContent = newValue;
      modal.remove();
    }
  });

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", function () {
    modal.remove();
  });

  modal.appendChild(input);
  modal.appendChild(saveButton);
  modal.appendChild(cancelButton);

  document.body.appendChild(modal);
}


// let tasks = [];

// document.addEventListener("DOMContentLoaded", function () {
//   const addTaskBtn = document.getElementById("addTaskBtn");
//   addTaskBtn.addEventListener("click", addTask);
// });

// function addTask() {
//   const taskName = document.getElementById("taskName").value;

//   const task = {
//     id: tasks.length,
//     name: taskName,
//     subTasks: []
//   };

//   tasks.push(task);
//   renderTasks();
  
//   document.getElementById("taskName").value = "";
// }

// function renderTasks() {
//   const taskList = document.getElementById("taskList");
//   taskList.innerHTML = "";

//   tasks.forEach((task, index) => {
//     const taskItem = document.createElement("li");
//     taskItem.innerHTML = `
//       <span>${task.name}</span>
//       <button class="addSubTaskBtn">Add Sub-Task</button>
//       <button class="editTaskBtn">Edit</button>
//       <button class="deleteTaskBtn">Delete</button>
//       <ul class="subTaskList"></ul>
//     `;

//     const addSubTaskBtn = taskItem.querySelector(".addSubTaskBtn");
//     addSubTaskBtn.addEventListener("click", function () {
//       openSubTaskInput(task.subTasks, 0, task.id);
//     });

//     const editTaskBtn = taskItem.querySelector(".editTaskBtn");
//     editTaskBtn.addEventListener("click", function () {
//       openEditModal(taskItem.querySelector("span"), "task", task.id);
//     });

//     const deleteTaskBtn = taskItem.querySelector(".deleteTaskBtn");
//     deleteTaskBtn.addEventListener("click", function () {
//       tasks.splice(index, 1);
//       renderTasks();
//     });

//     taskList.appendChild(taskItem);

//     task.subTasks.forEach((subTask, subIndex) => {
//       const subTaskItem = document.createElement("li");
//       subTaskItem.innerHTML = `
//         <span>${subTask.name}</span>
//         <button class="editSubTaskBtn">Edit</button>
//         <button class="deleteSubTaskBtn">Delete</button>
//       `;

//       const editSubTaskBtn = subTaskItem.querySelector(".editSubTaskBtn");
//       editSubTaskBtn.addEventListener("click", function () {
//         openEditModal(subTaskItem.querySelector("span"), "sub-task", task.id, subIndex);
//       });

//       const deleteSubTaskBtn = subTaskItem.querySelector(".deleteSubTaskBtn");
//       deleteSubTaskBtn.addEventListener("click", function () {
//         task.subTasks.splice(subIndex, 1);
//         renderTasks();
//       });

//       const subTaskList = taskItem.querySelector(".subTaskList");
//       subTaskList.appendChild(subTaskItem);
//     });
//   });
// }

// function openSubTaskInput(subTasks, currentLevel, taskId) {
//   const subTaskName = prompt(`Enter sub-task level ${currentLevel + 1} name:`);
//   if (subTaskName !== null && subTaskName.trim() !== "") {
//     const subTask = {
//       name: subTaskName
//     };
//     subTasks.push(subTask);
//     renderTasks();
//   }
// }

// function openEditModal(element, itemType, taskId, subTaskIndex) {
//   const newValue = prompt("Edit " + (itemType === "task" ? "task" : "sub-task") + ":", element.textContent);
  
//   if (newValue !== null && newValue.trim() !== "") {
//     if (itemType === "task") {
//       tasks[taskId].name = newValue;
//       renderTasks();
//     } else if (itemType === "sub-task") {
//       tasks[taskId].subTasks[subTaskIndex].name = newValue;
//       renderTasks();
//     }
//   }
// }
