import React, { useState } from "react";

function TodoInputBox(props) {
  const [todoInput, setTodoInput] = useState("");

  const TodoInputHandler = (e) => {
    setTodoInput(e.target.value);
  };

  const SaveTodoHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);

    const newTodo = {
      id,
      title: todoInput,
    };
    props.onSaveTodo(newTodo);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Currently Typing"
        value={todoInput}
        onChange={TodoInputHandler}
        className="min-w-128  py-3 px-4 mb-4 rounded outline-none text-gray-800 "
      />
      <button
        onClick={SaveTodoHandler}
        className="cursor-pointer w-16 h-12 p-1 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded text-white "
      >
        Add
      </button>
    </>
  );
}

export default TodoInputBox;
