import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";

function TodoAdd() {
  const [text, setText] = useState("");
  const nextTodoId = useSelector((state) => state.todo.todos.length + 1);

  const dispatch = useDispatch();

  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(text));
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoAdd;
