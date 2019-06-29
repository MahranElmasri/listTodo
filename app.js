const addForm = document.querySelector(".add");
const todoList = document.querySelector(".todos");
const search = document.querySelector(".search input");
const generateTemplete = todo => {
  const html = `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  todoList.innerHTML += html;
};
addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo) {
    generateTemplete(todo);
    addForm.reset();
  }
});
todoList.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodo = term => {
  Array.from(todoList.children)
    .filter(item => !item.textContent.includes(term))
    .forEach(item => item.classList.add("filtered"));

  Array.from(todoList.children)
    .filter(item => item.textContent.includes(term))
    .forEach(item => item.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim();
  filterTodo(term);
});
