
function addTask() {
  const input = document.getElementById("todo-input");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.className = "complete";
  completeBtn.onclick = () => {
    li.classList.toggle("done");

    // Show or remove "مكتمل ✅"
    if (li.classList.contains("done")) {
      if (!li.querySelector(".status")) {
        const status = document.createElement("span");
        status.className = "status";
        status.textContent = "مكتمل ✅";
        status.style.marginLeft = "10px";
        li.appendChild(status);
      }
    } else {
      const status = li.querySelector(".status");
      if (status) status.remove();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(actions);

  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}
