import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    { id: 1, title: "Сходи за хлебом", completed: false },
    { id: 2, title: "Сходи за молоком", completed: true },
    { id: 3, title: "Сходи за колбасой", completed: false },
  ];

  asyncTodos = [];
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(todo) {
    todo.completed = !todo.completed;
  }

  fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => (this.asyncTodos = [...this.asyncTodos, ...json]));
  }
}

export default new Todo();
