let box2 = document.getElementById("box2");
box2.onmouseover = function() {box2.style.backgroundColor = "lightgreen"};
box2.onmouseout = function() {box2.style.backgroundColor = "lightblue"};

let inpuText = document.getElementById("inpuText");
let outpuText = document.getElementById("outpuText");

inpuText.onkeyup = function(){
    outpuText.textContent = inpuText.value;
};

function calculator(char){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let res;
    
    if(char === "+"){
        res = a+b;
    }
    else if(char === "-"){
        res = a-b;
    }
    else if(char === "*"){
        res = a*b;
    }
    else if(char === "/"){
        res = b!==0? a/b: "Error: division by 0!"
    }
    document.getElementById("result").textContent = "Result: " + res;
}
