const cant = document.querySelector(".cant");
const addBtn = document.querySelector(".btn-add");
const tables = document.querySelector(".tasks");
const btnsum = document.querySelector(".btn-sum");
const btnres = document.querySelector(".btn-res");


addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  for(let i = 0; i < cant.value; i++) {
    createTable();
  }
  cant.value = "";
});


function createTable() {
  const table = document.createElement("div");
  const removeTable = document.createElement("button");
  const selectColorTable = document.createElement("form");
  const btnColor = document.createElement("input");
  const tableTitle = document.createElement("h3");
  const form = document.createElement("form");
  const input = document.createElement("input");
  const addTask = document.createElement("button");
    
  tables.style.display = "grid";
  table.className = "taskList";  
  removeTable.className = "removeTable";
  removeTable.textContent = "x";
  btnColor.className = "type";
  btnColor.className = "btnColor";
  btnColor.setAttribute("type", "color");
  tableTitle.textContent = "Agrega un titulo";
  tableTitle.className = "contenteditable";
  tableTitle.setAttribute("contenteditable", "true");
  input.className = "placeholder";
  input.setAttribute("placeholder", "Agregá tu tarea..");
  addTask.className = "btn-add-task";
  addTask.textContent = "+";

  tables.appendChild(table);
  table.appendChild(removeTable);
  table.appendChild(selectColorTable);
  selectColorTable.appendChild(btnColor);
  table.appendChild(tableTitle);
  table.appendChild(form);
  form.appendChild(input);
  form.appendChild(addTask);


  removeTable.addEventListener("click", (e) => {
    e.preventDefault();    
    table.remove();
  });

  btnColor.addEventListener("input", (e) => {
    e.preventDefault();

    table.style.backgroundColor = e.target.value;
  });

  addTask.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;

    if (text !== "") {
      const ul = document.createElement("ul");
      const li = document.createElement("li");
      const p = document.createElement("p");
      table.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(p);
      li.appendChild(addDeleteBtn());
      p.textContent = text;
    }
    input.value = "";
    tableTitle.execCommand("DefaultParagraphSeparator", true, "h3");
  });


  function addDeleteBtn() {
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "x";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) => {
      const item = document.querySelector("li");
      item.remove();

      const items = document.querySelectorAll(".tasks");

      if(items.length  === 0){
        items.style.display = "none";
      }

      // const items = document.querySelectorAll("li");

      // if (items.length === 0) {
      //   empty.style.display = "block";
      // }
    });

    return deleteBtn;
  }
  
}


btnsum.addEventListener("click", (e) => {
  e.preventDefault();
  cant.value++;
});

btnres.addEventListener("click", (e) => {
  e.preventDefault();  
  cant.value--;
});