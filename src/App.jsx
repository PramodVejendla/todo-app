import "./App.css";
import HeaderM from "./components/HeaderM";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="container">
        <HeaderM />
        <TodoForm />
        <TodoList />
      </div>
    </>
  );
}

export default App;
