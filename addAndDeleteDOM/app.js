let uList = document.querySelector("ul");
let addBtn = document.getElementById("add");
addBtn.accessKey = "Enter";
let delBtn = document.querySelector("#del");
let input = document.querySelector("input");

addBtn.addEventListener("click", (e) => {
  if (input.value) {
    let li = document.createElement("li");
    console.log(li);
    let item = document.createTextNode(input.value);
    li.appendChild(item);

    uList.appendChild(li);
    input.value = "";
    input.focus();
  }
});
input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addBtn.click();
  }
});

delBtn.addEventListener("click", (e) => {
  uList.lastChild.remove();
});
document.addEventListener("keydown", (e) => {
  if (e.code === "Delete") {
    delBtn.click();
  }
});
