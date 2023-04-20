document.getElementById("addTodo").onclick = (e) => {
  if (document.querySelector(".todo-text").value.trim().length == 0) {
    alert("Please enter a task");
  } else {
    createTodo(document.querySelector(".todo-text").value);
  }
};


function createTodo(todoText){
    const todosContainer = document.getElementById("tasks");
    const taskContainer = document.createElement("ul");
taskContainer.innerText = todoText
document.querySelector(".todo-text").value = "";

}