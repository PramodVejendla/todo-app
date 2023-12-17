import "./TodoList.css";

function TodoList() {
  return (
    <>
      <div className="todoListContainer">
        <ul>
          <div>
            <span>#</span>
            <li>Complete online Javascript course</li>
          </div>
          <div>
            <span>#</span>
            <li>Jog around the park 3x</li>
          </div>
          <div>
            <span>#</span>
            <li>10 minutes meditation</li>
          </div>
          <div>
            <span>#</span>
            <li>Read for 1 hour</li>
          </div>
          <div>
            <span>#</span>
            <li>Pick up groceries</li>
          </div>
          <div>
            <span>#</span>
            <li>Complete Todo App on Frontend Mentor</li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default TodoList;
