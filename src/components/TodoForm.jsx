import "./TodoForm.css";

function TodoForm() {
  return (
    <>
      <form className="todoForm">
        <input
          className="inputbox"
          type="text"
          placeholder="Currently Typing..."
        />
      </form>
    </>
  );
}

export default TodoForm;
