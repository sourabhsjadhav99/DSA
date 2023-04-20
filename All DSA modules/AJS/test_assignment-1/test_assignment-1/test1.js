
document.getElementById('addTodo').onclick=(e)=>{
  e.preventDefault();
    if(document.querySelector('.todo-text').value.trim().length==0){
        alert('Please enter a task');
    }
    else {
      createTodo(document.querySelector(".todo-text").value);
    }
}
function createTodo(todoText){
  const todosContainer=document.getElementById('tasks');
  const taskContainer=document.createElement('div');
  taskContainer.setAttribute('class', 'task');
  const valueEle=document.createElement('span');
  taskContainer.setAttribute('class', 'task');
  valueEle.innerText=document.querySelector('.todo-text').value;
  taskContainer.append(valueEle);
  todosContainer.append(taskContainer);
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("lastname",...document.getElementById('tasks'));
    document.getElementById("tasks").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("tasks").innerHTML = "Sorry, your browser does not support Web Storage...";
   }
   document.querySelector('.todo-text').value='';
}
