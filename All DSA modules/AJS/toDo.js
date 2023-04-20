let inputBox = document.getElementById("inputBox");
let btn = document.getElementById("btn");
btn.style.cssText="width:100px; margin:20px"
let container = document.getElementById("container");
btn.onclick=(e)=> {
    e.preventDefault();
    if (inputBox.value.trim().length == 0) {
      alert("emptyBox");
    } else {
      createTodo(inputBox.value)
      
    }
  };
function createTodo(inputBoxValue){
    let subCon = document.createElement("div");
    subCon.setAttribute("id", "subCon");
    let box = document.createElement("span");
    box.setAttribute("id", "box");
    box.innerHTML=inputBoxValue
    let delBtn = document.createElement("button");
    delBtn.innerHTML="delete"
    delBtn.setAttribute("class", "delBtn");
    let doneBtn = document.createElement("button");
    doneBtn.innerHTML="done"
    doneBtn.setAttribute("class", "doneBtn");
    subCon.appendChild(box);
    subCon.appendChild(delBtn);
    subCon.appendChild(doneBtn)
    container.appendChild(subCon)
    inputBox.value=""
    current_task= document.querySelectorAll(".delBtn")
    for (let todoDelete of current_task) {
        todoDelete.onclick = function () {
          this.parentNode.remove();
        };
      }
      complete_task= document.querySelectorAll(".doneBtn")
    for (let complete of complete_task) {
        complete.onclick = function () {
          this.parentNode.style.background="green";
        };
        complete.ondblclick = function () {
            this.style.background="red";
          };
      }
}

function clearAllTodos() {
    document.querySelectorAll(".subCon").forEach(function (ele) {
      document.getElementById("container").removeChild(ele);
    });
  }
  document.getElementById("deleteTodo").onclick = clearAllTodos;
 
 
  inputBox.onkeyup = function () {
    document.querySelector(".runtime-todo").innerHTML = this.value;
  }