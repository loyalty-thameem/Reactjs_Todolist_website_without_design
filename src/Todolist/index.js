import React, { useState } from "react";
import { TodolistView } from "../TodolistView";

export function Todolist() {
  const [todo, setTodo] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [todoId, setTodoId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoId === "") {
      setTodoData((oldArray) => [
        ...oldArray,
        { id: ids, title: todo, complete: false }
      ]);
      setTodo("");
      setTodoId("");
    } else {
      const findId = todoData?.find((item, index) => item.id === todoId);
      const findIds = todoData?.map((item, index) =>
        item.id === findId.id
          ? (item = { id: findId.id, title: todo, complete: false })
          : { id: item.id, title: item.title }
      );
      setTodoData(findIds);
      // const newTodoItems = [...todoData];
      // console.log("newTodoItems", newTodoItems);
      // let todoObj = { title: todo.title, id: findIds, complete: false };
      // console.log("todoObj", todoObj);
      // newTodoItems.splice(findIds, 1, todoObj);
      // setTodoData(newTodoItems);
      setTodo("");
      setTodoId("");
    }
  };
  const ids = Math.floor(Math.random(100) * 100);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          placeholder="something text"
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type="submit">{todoId ? "Update" : "Add"}</button>
      </form>
      <br />
      <TodolistView
        todoData={todoData}
        setTodoData={setTodoData}
        setTodo={setTodo}
        setTodoId={setTodoId}
      />
    </>
  );
}
