var inp = document.getElementById("inpt");
var AddBtn = document.getElementById("add-btn");
var parent = document.getElementById("parent");
var EidtedInput = document.getElementById("editeinp");
var informa = null;
var UpdateTextTodo = null;
var toggle = false;
function AddTodo() {
  var todo = inp.value;
  if (todo === "") {
    alert("Please enter a todo");
    return;
  }

  var parent = document.getElementById("parent");
  var divs = parent.firstElementChild;
  var ul = divs.firstElementChild;
  parent.classList.replace("d-none", "d-block");
  var li = document.createElement("li");
  li.setAttribute(
    "class",
    "list-group-item border-0 border-bottom-1 border-bottom d-flex justify-content-between align-items-center"
  );
  var span = document.createElement("span");
  span.setAttribute("class", "fs-6 fw-medium");
  var spanText = document.createTextNode(todo);
  span.appendChild(spanText);
  var div = document.createElement("div");
  div.setAttribute("class", "d-flex align-items-center gap-2");
  var UpdateBtn = document.createElement("button");
  UpdateBtn.setAttribute("class", "btn btn-sm  btn-success ms-auto");
  UpdateBtn.setAttribute("onclick", "UpdateTodo(this)");
  UpdateBtn.setAttribute("data-bs-toggle", "modal");
  UpdateBtn.setAttribute("data-bs-target", "#exampleModal");
  var Uptext = document.createTextNode("update");
  UpdateBtn.appendChild(Uptext);
  // delet button
  var btnDelete = document.createElement("button");
  btnDelete.setAttribute("class", "btn btn-sm btn-danger ms-auto");
  btnDelete.setAttribute("onclick", "deleteSpecific(this)");
  var Deltext = document.createTextNode("delete");
  btnDelete.appendChild(Deltext);
  // Complte button
  var CompletedButton = document.createElement("button");
  CompletedButton.setAttribute("class", "btn btn-sm btn-warning ms-auto");
  CompletedButton.setAttribute("onclick", "completedTodo(this)");
  var ComText = document.createTextNode("Completed");
  CompletedButton.appendChild(ComText);
  // append buttons
  div.appendChild(UpdateBtn);
  div.appendChild(btnDelete);
  div.appendChild(CompletedButton);
  var leftSide = document.createElement("div");
  leftSide.setAttribute("class", "d-flex align-items-center gap-2");
  var inputDiv = document.createElement("div");
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "flexCheckDefault");
  checkbox.setAttribute("class", "form-check-input");
  inputDiv.appendChild(checkbox);
  leftSide.appendChild(inputDiv);
  leftSide.append(span);
  li.appendChild(leftSide);
  li.appendChild(div);
  ul.appendChild(li);
  inp.value = "";
}

function DeletAllTodo() {
  var divParrn = parent.firstElementChild;
  var ulItems = divParrn.firstElementChild;
  ulItems.remove();
  var ul = document.createElement("ul");
  ul.setAttribute("class", "list-group");
  divParrn.appendChild(ul);
  parent.classList.replace("d-block", "d-none");
}

function deleteSpecific(event) {
  var firstEle = event.parentNode;
  var parentEle = firstEle.parentNode;
  var allLi = parentEle.parentNode.children.length;

  if (allLi == 1) {
    parent.classList.replace("d-block", "d-none");
  }
  parentEle.remove();
}

function UpdateTodo(event) {
  informa = event;
  EidtedInput.value =
    event.parentNode.previousElementSibling.parentNode.firstElementChild.lastElementChild.innerHTML;
}
function UpdateNow(event) {
  UpdateTextTodo = event;
  informa.parentElement.previousElementSibling.lastElementChild.innerHTML =
    EidtedInput.value;
  console.log(
    informa.parentElement.previousElementSibling.lastElementChild.innerHTML
  );
  event.setAttribute("data-bs-dismiss", "modal");
}

function completedTodo(event) {
  event.parentNode.previousElementSibling.classList.toggle("completed");

  //  if(event.parentNode.previousElementSibling.firstElementChild.firstElementChild)
  console.log(
    event.parentNode.previousElementSibling.firstElementChild.firstElementChild
  );
  if (
    !event.parentNode.previousElementSibling.firstElementChild.firstElementChild.getAttribute(
      "checked"
    )
  ) {
    event.parentNode.previousElementSibling.firstElementChild.firstElementChild.setAttribute(
      "checked",
      "checked"
    );
  } else {
    event.parentNode.previousElementSibling.firstElementChild.firstElementChild.removeAttribute(
      "checked"
    );
  }
}
