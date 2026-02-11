let form = document.getElementById('form');
let input = document.getElementById('newTask');
let list = document.getElementById('list');

form.addEventListener('submit', function(event){
  event.preventDefault();
  let taskText = input.value;
  let div = document.createElement("div");
  div.className = "uwu";
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let span = document.createElement("span");
  span.innerText = taskText;

  checkbox.addEventListener("change", function(){
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });
  let del = document.createElement("button");
  del.innerText = "Delete";
  del.addEventListener("click", function(){
    div.remove();
  });
  div.append(checkbox, span, del);
  list.appendChild(div);
  input.value = "";
});
