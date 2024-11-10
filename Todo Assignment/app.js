var inp = document.getElementById("inpt");
var AddBtn = document.getElementById("add-btn");
var parent = document.getElementById("parent");
var isEdite = false;
var informa = null;
function AddTodo() {
  var todo = inp.value;
  if (todo === "") {
    alert("Please enter a todo");
    return;
  }
  //   console.log(informa);

  if (AddBtn.innerHTML === "update") {
    var textTodo = informa.parentNode.previousElementSibling;
    textTodo.innerHTML = inp.value;
    inp.value = "";
    AddBtn.innerHTML = "Add";
  } else {
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
    var Uptext = document.createTextNode("update");
    UpdateBtn.appendChild(Uptext);
    var btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "btn btn-sm btn-danger ms-auto");
    btnDelete.setAttribute("onclick", "deleteSpecific(this)");
    var Deltext = document.createTextNode("delete");
    btnDelete.appendChild(Deltext);
    div.appendChild(UpdateBtn);
    div.appendChild(btnDelete);
    li.appendChild(span);
    li.appendChild(div);
    ul.appendChild(li);
    inp.value = "";
  }
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
  isEdite = true;
  var li = event.parentNode.parentNode;
  if (isEdite == true) {
    var span = li.firstElementChild.innerHTML;
    inp.value = span;
    inp.parentNode.nextElementSibling.firstElementChild.innerHTML = "update";
    isEdite = false;
  }
  informa = event;
}
