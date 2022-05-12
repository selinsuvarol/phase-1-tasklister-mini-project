document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form");
  console.log(taskForm)

  let taskList = document.querySelector("#tasks")
  console.log(taskList)

  taskForm.addEventListener("submit",clickHandler)

});

 function clickHandler(event){
  event.preventDefault();

  const taskDescription = document.getElementById('new-task-description').value;
  console.log(taskDescription)
  let listItem= document.createElement("li")
  listItem.innerText = taskDescription
  document.querySelector("#tasks").appendChild(listItem);

  const but = document.createElement("button")
  but.innerText = "X"
  listItem.appendChild(but)
  but.addEventListener("click", deleteHandler)

 }

 function deleteHandler (event){
  event.preventDefault()
  //event.target.closest("li").remove()
  //this.parentNode.remove()
  this.parentElement.remove()

 }