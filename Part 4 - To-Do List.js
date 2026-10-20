let tasks = [];
let input = document.getElementById("InpuText");
let btnAdd = document.getElementById("AddTask");
let list = document.getElementById("TaskList");

btnAdd.onclick = function(){
    let taskText = input.value.trim();
    if (taskText === "") return;
    
    tasks.push(taskText);

    let li = document.createElement("li");
    li.textContent = taskText + " ";

    li.onclick = function(){
        li.style.textDecoration = li.style.textDecoration === "line-through"
        ? "none": "line-through";
    }
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn-close";

    deleteButton.onclick = function(event){
        event.stopPropagation();
        tasks.splice(tasks.indexOf(taskText), 1);
        li.remove();
    }
    li.appendChild(deleteButton);
    list.appendChild(li);

    input.value = "";
}