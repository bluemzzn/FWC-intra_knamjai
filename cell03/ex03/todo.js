const newButton = document.getElementById("new");
const ftList = document.getElementById("ft_list");

// Load saved todos when the page opens
loadTodos();

// Create a new todo
newButton.addEventListener("click", function () {
  const text = prompt("Enter a new TO DO:");

  if (text !== null && text.trim() !== "") {
    createTodo(text.trim());
    saveTodos();
  }
});

// Create a todo element
function createTodo(text) {
  const todo = document.createElement("div");

  todo.textContent = text;

  // New todo goes to the top
  ftList.prepend(todo);

  // Click todo to remove it
  todo.addEventListener("click", function () {
    const confirmed = confirm("Do you want to remove this TO DO?");

    if (confirmed) {
      todo.remove();
      saveTodos();
    }
  });
}

// Save todos to cookie
function saveTodos() {
  const todos = [];

  const todoElements = ftList.querySelectorAll("div");

  todoElements.forEach(function (todo) {
    todos.push(todo.textContent);
  });

  document.cookie =
    "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

// Load todos from cookie
function loadTodos() {
  const cookies = document.cookie.split("; ");

  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");

    if (name === "todos") {
      const todos = JSON.parse(decodeURIComponent(value));

      todos.forEach(function (todo) {
        createTodo(todo);
      });

      break;
    }
  }
}
