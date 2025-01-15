import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  toggleCompleted,
} from "../features/todo/todoSlice";
import { useState } from "react";

function Todos() {
  const todos = useSelector((store) => store.todos);
  const [todoMsg, setTodoMsg] = useState("");
  const [editableTodo, setEditableTodo] = useState(null);
  const dispatch = useDispatch();
  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
            todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
        >
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={todo.completed}
            onChange={() => dispatch(toggleCompleted(todo.id))}
          />
          <input
            type="text"
            className={`border outline-none w-full bg-transparent rounded-lg ${
              editableTodo === todo.id
                ? "border-black/10 px-2"
                : "border-transparent"
            } ${todo.completed ? "line-through" : ""}`}
            value={editableTodo === todo.id ? todoMsg : todo.text}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!editableTodo === todo.id}
          />
          {/* Edit, Save Button */}
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={() => {
              if (todo.completed) return;

              if (editableTodo === todo.id) {
                dispatch(
                  updateTodo({ id: todo.id, text: todoMsg, completed: false })
                );
                setTodoMsg("");
                setEditableTodo(null);
              } else {
                setEditableTodo(todo.id);
                setTodoMsg(todo.text);
              }
            }}
            disabled={todo.completed}
          >
            {editableTodo === todo.id ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            ❌
          </button>
        </div>
      ))}
    </>
  );
}
export default Todos;
