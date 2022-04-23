import React, { useEffect } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoFilterButton from "./TodoFilterButton";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./todoSlice";

function Todo() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.todo.error);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      <span>{error}</span>
      <TodoAdd />
      <TodoList />
      <TodoFilterButton />
    </div>
  );
}

export default Todo;
