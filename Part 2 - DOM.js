let paragraph = document.getElementById("text");
let button = document.getElementById("button");

button.onclick = function() {paragraph.textContent = "Nice to hear that!"};

let colorButton = document.getElementById("color-change-btn");
let sizeButton = document.getElementById("font-size-btn");
let box = document.getElementById("box");

colorButton.onclick = function() {box.style.backgroundColor = "pink"};
sizeButton.onclick = function() {box.style.fontSize = "36px"};

let addButton = document.getElementById("add");
let removeButton = document.getElementById("remove");
let listProducts = document.getElementById("product-list");

addButton.onclick = function() {
    let newItem = document.createElement("li");
    newItem.textContent = "Tomatos";
    listProducts.append(newItem);
}

removeButton.onclick = function() {
    if(listProducts.lastElementChild){
        listProducts.removeChild(listProducts.lastElementChild);
    }
}


