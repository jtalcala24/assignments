const shoppingList = document.querySelector("#list");
const form = document.getElementById("add-todo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newAdd = document.createElement("li");
  const newItem = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const input = document.getElementById("title");

  newItem.textContent = title.value;
  newAdd.appendChild(newItem);
  title.value = "";

  newAdd.appendChild(editButton);
  editButton.textContent = "edit";

  newAdd.appendChild(deleteButton);
  deleteButton.textContent = " X";

  shoppingList.appendChild(newAdd);

  editButton.style.margin = "2px";
  deleteButton.style.margin = "2px";

  deleteButton.addEventListener("click", (e) => {
    deleteButton.remove();
    editButton.remove();
    newItem.remove();
  });

  editButton.addEventListener("click", (e) => {
    let change = document.createElement("input");
    editButton.textContent = "save";

    newAdd.prepend(change);
    change.value = newItem.textContent;
    newItem.textContent = "";

    editButton.addEventListener("click", (e) => {
      newItem.textContent = change.value;
      editButton.textContent = "edit";

      change.remove();
    });
  });
});

const saveList = document.createElement("button");
document.querySelector("h1").append(saveList);

saveList.textContent = "Save List";
saveList.style.margin = "10px";
saveList.style.padding = "10px";

saveList.addEventListener("click", (e) => {});
