import closeBtn from "../assets/images/icon-cross.svg";
import CheckIcon from "../assets/images/icon-check.svg";

const listStyles =
  "flex items-center gap-2 p-2 border-b-2 border-gray-100 text-gray-500";
const list = "flex-1  text-start px-2 py-1 cursor-pointer ";
const closeBtnStyles = "w-3 h-3 mx-2";
const checkboxStyles =
  "cursor-pointer  w-6 h-6 p-1 rounded rounded-full border border-2 border-gray-200";

const checkboxSelected =
  "cursor-pointer w-6 h-6 p-1 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded rounded-full border border-2";

function TodoList({ title }) {
  return (
    <div>
      <ul>
        <div className={listStyles}>
          <input type="checkbox" className="hidden" />
          <img src={CheckIcon} className={checkboxStyles} />
          <li className={list}>{title}</li>
          <button>
            <img src={closeBtn} alt="closeBtn" className={closeBtnStyles} />
          </button>
        </div>
      </ul>
    </div>
  );
}

export default TodoList;
