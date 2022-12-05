import { observer } from "mobx-react-lite";
import todo from "./store/todo";

const Todo = observer(() => {
  return (
    <div>
      {todo.todos.map((t) => (
        <div key={todo.id}>
          <div>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => todo.completeTodo(t)}
            />
            {t.title}
            <button onClick={() => todo.removeTodo(t.id)}>X</button>
          </div>
        </div>
      ))}
      <div style={{ borderTop: "1px solid", margin: "10px" }}>
        <button onClick={() => todo.fetchTodos()}>ТЫК</button>
        {todo.asyncTodos.map((t) => (
          <div>{t.title}</div>
        ))}
      </div>
    </div>
  );
});

export default Todo;
