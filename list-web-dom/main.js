let iconTheme = document.querySelector(".color-icon");
let body = document.querySelector("body");
let container = document.querySelector(".global-container");
let listContainer = document.querySelector(".container-list");

let themeButton = document.getElementById("color-theme");
themeButton.addEventListener("click", function () {
  iconTheme.classList.toggle("fa-moon");
  body.classList.toggle("light-theme");
});

let addButton = document.getElementById("add-task");
let quitButton = document.getElementById("quit-task");

function createList(content) {
  let newList = document.createElement("ul");
  listContainer.append(newList);
  content.forEach(function (item) {
    let listItem = document.createElement("li");
    listItem.innerText = item;
    newList.append(listItem);
  });
}

let initialLists = [
  ["Buy eggs", "Do laundry", "Buy facturas for Seba"],
  ["Sleep", "Eat", "Code", "Repeat"],
  ["item 3", "item 3"],
];

initialLists.forEach(createList);

let lists = document.querySelectorAll("ul");
lists.forEach(function (list, index) {
  list.id = `list${index + 1}`;
});

addButton.addEventListener("click", function () {
  container.style.filter = "blur(10px)";
  let newForm = addForm();
  let titleForm = addTitleForm(newForm, "¿Qué tarea desea agregar?");
  let divForm = addDivInputBtn(newForm);
  let inputForm = addInputForm(divForm);
  let buttonForm = addButtonForm(divForm);

  buttonForm.addEventListener("click", function (event) {
    event.preventDefault();

    if (inputForm.value.length <= 0) {
      alert("ERROR: ingrese una tarea válida");
    } else {
      titleForm.innerText = "¿A qué lista lo quieres agregar?";
      buttonForm.style.display = "none";
      inputForm.style.display = "none";
      divForm.style.gap = "15px";
      lists.forEach(function (list, index) {
        let listButton = document.createElement("button");
        listButton.innerText = `Lista ${index + 1}`;
        listButton.classList.add("list-btn");
        divForm.append(listButton);

        listButton.addEventListener("click", function () {
          let newItem = document.createElement("li");
          newItem.innerText = inputForm.value;
          list.append(newItem);

          newForm.remove();
          container.style.filter = "blur(0)";
          addButton.style.pointerEvents = "auto";
        });
      });
    }
  });
  addButton.style.pointerEvents = "none";
});

let deleteIconsVisible = false;
quitButton.addEventListener("click", function () {
  deleteIconsVisible = true;

  let allItems = document.querySelectorAll("li");

  allItems.forEach(function (item) {
    let deleteButton = item.querySelector(".icon-delete");

    if (!deleteButton) {
      deleteButton = document.createElement("button");
      deleteButton.classList.add("icon-delete");

      let iconButton = document.createElement("i");
      iconButton.classList.add("fa-solid", "fa-trash");
      deleteButton.append(iconButton);

      deleteButton.addEventListener("click", function () {
        item.remove();
      });

      item.append(deleteButton);
    }

    deleteButton.style.display = deleteIconsVisible ? "inline" : "none";
  });
});

function addForm() {
  let formulario = document.createElement("form");
  formulario.classList.add("form");
  body.append(formulario);
  return formulario;
}

function addTitleForm(formulario, title) {
  let titulo = document.createElement("h2");
  titulo.innerText = title;
  formulario.append(titulo);
  return titulo;
}

function addDivInputBtn(formulario) {
  let inputButtonDiv = document.createElement("div");
  inputButtonDiv.classList.add("input-btn-container");
  formulario.append(inputButtonDiv);
  return inputButtonDiv;
}

function addInputForm(inputButtonDiv) {
  let input = document.createElement("input");
  input.classList.add("input-form");
  inputButtonDiv.append(input);
  return input;
}

function addButtonForm(inputButtonDiv) {
  let sendButton = document.createElement("button");
  sendButton.classList.add("send-btn");
  sendButton.innerText = "Enviar";
  inputButtonDiv.append(sendButton);
  return sendButton;
}
