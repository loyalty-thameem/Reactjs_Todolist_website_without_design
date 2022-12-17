import React from "react";
export function TodolistView({ todoData, setTodoData, setTodo, setTodoId }) {
  const handleDelete = (id) => {
    const deleted = todoData.filter((items, index) => items.id !== id);
    setTodoData(deleted);
  };
  const handleUpdate = (id) => {
    const updateTodo = todoData.find((item, index) => item.id === id);
    setTodo(updateTodo.title);
    setTodoId(updateTodo.id);
  };
  const handleDone = (id, complete) => {
    const done = todoData.map((items, index) =>
      items.id === id ? { ...items, complete: !complete } : items
    );
    setTodoData(done);
  };
  return (
    <>
      {todoData?.map((item, index) => {
        return (
          <div key={index}>
            <h3
              style={
                item.complete
                  ? { textDecorationLine: "line-through" }
                  : { textDecorationLine: "" }
              }
            >
              {item.title}
            </h3>
            <button onClick={() => handleDone(item.id, item.complete)}>
              {item.complete ? "Undone" : "Done"}
            </button>
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}
