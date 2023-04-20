document.getElementById("addTodo").onclick=()=>{
    if (document.querySelector(".todo-text").value.length == 0) {
        alert("Please enter a task");
      } else {
        const todosContainer = document.getElementById("tasks");
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "task");
    const valueEle = document.createElement("span");
    taskContainer.setAttribute("class", "task");
    const buttonEle = document.createElement("button");
    buttonEle.setAttribute("class", "delete");
    buttonEle.innerHTML = '<i class="far fa-trash-alt"></i>';
    valueEle.innerText=document.querySelector(".todo-text").value;
 

    valueEle.innerText = todoText;
    taskContainer.append(valueEle);
    taskContainer.append(buttonEle);
    //taskContainer.append(completebuttonEle);
    todosContainer.append(taskContainer);
    //document.querySelector(".todo-text").value = "";
      }
}