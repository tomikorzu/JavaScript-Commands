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

function createList() {
  let newList = document.createElement("ul");
  listContainer.append(newList);
}
// Ponga createList() aqui para crear una lista
createList();
createList();
createList();
let contador = 0;
let wichList = document.querySelectorAll("ul");
wichList.forEach(function (item) {
  contador++;
  item.id = `list${contador}`;
});

let lists = document.querySelectorAll(`ul`);
function initialItems(listItems, list) {
  let listId = list - 1;
  listItems.forEach(function (item) {
    let createItem = document.createElement("li");
    createItem.innerText = item;
    lists[listId].append(createItem);
    return listId;
  });
}
//Ponga los items iniciales que quiera poner en esta lista, y luego el numero de lista que quiera
initialItems(["Buy eggs", "Do laundry", "Buy facturas for Seba"], 1);
initialItems(["Sleep", "Eat", "Code", "Repeat"], 2);
initialItems(["Sleep", "Eat", "Code", "Repeat"], 3);
initialItems(["Sleep", "Eat", "Code", "Repeat"], 3);
initialItems(["Sleep", "Eat", "Code", "Repeat"], 1);
initialItems(["Sleep", "Eat", "Code", "Repeat"], 3);

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

quitButton.addEventListener("click", function () {
  quitButton.style.pointerEvents = "none";
  let allItems = document.querySelectorAll("li");
  allItems.forEach(function (item) {
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("icon-delete");
    item.append(deleteButton);
    let iconButton = document.createElement("i");
    iconButton.classList.add("fa-solid");
    iconButton.classList.add("fa-trash");
    deleteButton.append(iconButton);
    deleteButton.addEventListener("click", function () {
      item.style.display = "none";
      quitButton.style.pointerEvents = "auto";
      let allDeleteButtons = document.querySelectorAll(".fa-trash");
      allDeleteButtons.forEach(function (item) {
        item.style.display = "none";
      });
    });
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
