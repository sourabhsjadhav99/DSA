document.getElementById("addTodo").onclick = (e) => {
  e.preventDefault(); //SUBMIT//A TAG
  if (document.querySelector(".todo-text").value.trim().length == 0) {
    alert("Please enter a task");
  } else {
    createTodo(document.querySelector(".todo-text").value);
  }
};

function createTodo(todoText) {
  //CREATE TODO HERE
  /* <div class="task">
    <span id="taskname">SAMPLE TODO</span>
    <button class="delete"><i class="far fa-trash-alt"></i></button>
</div> */

  const todosContainer = document.getElementById("tasks");

  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "task");

  const valueEle = document.createElement("span");
  taskContainer.setAttribute("class", "task");
  valueEle.innerText = todoText;
  taskContainer.append(valueEle);

  const buttonEle = document.createElement("button");
  buttonEle.setAttribute("class", "delete");
  buttonEle.innerHTML = '<i class="far fa-trash-alt"></i>';
  taskContainer.append(buttonEle);

  const completebuttonEle = document.createElement("button");
  completebuttonEle.setAttribute("class", "complete");
  completebuttonEle.innerHTML = "DONE";
  taskContainer.append(completebuttonEle);
  
  todosContainer.append(taskContainer);

  document.querySelector(".todo-text").value = "";

  var current_task = document.querySelectorAll(".delete"); //ARRAY of HTMLElements
  for (let todoDelete of current_task) {
    todoDelete.onclick = function () {
      this.parentNode.remove();
    };
  }

  //SET STATUS to COMPLETE
  var complete_button = document.querySelectorAll(".complete"); //ARRAY of HTMLElements
  for (let complete of complete_button) {
    complete.onclick = function () {
      this.parentNode.style.background = "green";
    };
    complete.ondblclick = function () {
      this.style.background = "red";
      this.parentNode.style.background = "#c5e1e6";
    };
  }
  //function end
}

function clearAllTodos() {
  document.querySelectorAll(".task").forEach(function (ele, index) {
    document.getElementById("tasks").removeChild(ele);
  });
}
document.getElementById("deleteTodo").onclick = clearAllTodos;

document.querySelector(".todo-text").onkeyup = function () {
  document.querySelector(".runtime-todo").innerHTML = this.value;
};

document.querySelector("#generateTodo").onclick = function (event) {
  event.preventDefault();
  //setTimeout(handlerfunction, duration)
  setTimeout(() => {
    // document.getElementById("tasks").innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      createTodo("Hello I am todo:- " + i);
    }
  }, 5000);
};

//document.querySelector('.total').innerHTML+=parseInt(document.querySelector('.total').innerHTML) + parseInt(document.querySelector('.price').value);
