
function addTask() {
    const newTask = document.getElementById("taskInput").value.trim();

    const LI = document.createElement("li");
    LI.classList.add("p-3");

    const SPAN = document.createElement("span");
    SPAN.textContent = newTask;

    const BUTTON = document.createElement("button");
    BUTTON.classList.add("btn", "btn-danger", "btn-sm", "ms-3");
    BUTTON.textContent = "Delete";
    BUTTON.onclick = () => LI.remove();


    const BUTTON1 = document.createElement("button");
    BUTTON1.classList.add("btn", "btn-success", "btn-sm", "ms-3");
    BUTTON1.textContent = "Edit";
    BUTTON1.onclick = () => {
        const newt = prompt("Edit your task:", SPAN.textContent);
        SPAN.textContent = newt.trim();
    };


    

    LI.appendChild(SPAN);
    LI.appendChild(BUTTON);
    LI.appendChild(BUTTON1);

    document.getElementById("taskList").appendChild(LI);

    document.getElementById("taskInput").value = "";
}
