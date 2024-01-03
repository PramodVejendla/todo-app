import closeBtn from "../assets/images/icon-cross.svg";
import CheckIcon from "../assets/images/icon-check.svg";
import { useState } from "react";

const list = "flex-1  text-start px-2 py-1 cursor-pointer ";
const listCompleted =
  "flex-1  text-start line-through px-2 py-1 cursor-pointer text-gray-400";

const checkboxStyles =
  "cursor-pointer  w-6 h-6 p-1 rounded rounded-full border border-2 border-gray-200";

const checkboxSelected =
  "cursor-pointer w-6 h-6 p-1 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded rounded-full border border-2";

function TodoList({ title, deleteTodo, completedTodo }) {
  const [completed, setCompleted] = useState(false);

  const completedTodohandler = () => {
    setCompleted(!completed);
  };
  return (
    <div>
      <ul>
        <div className="flex items-center gap-2 p-2 border-b-2 border-gray-100 text-gray-500">
          <img
            src={CheckIcon}
            onClick={completedTodohandler}
            className={completed ? checkboxSelected : checkboxStyles}
          />
          <li className={completed ? listCompleted : list}>{title}</li>
          <button onClick={deleteTodo}>
            <img src={closeBtn} alt="closeBtn" className="w-3 h-3 mx-2" />
          </button>
        </div>
      </ul>
    </div>
  );
}

export default TodoList;
