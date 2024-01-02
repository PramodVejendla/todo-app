import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoInputBox from "./components/TodoInputBox";
import TodoList from "./components/TodoList";

const DummyTodos = [
  { id: 1, title: "Complete online React course" },
  { id: 2, title: "10 minutes meditation" },
  { id: 3, title: "Read for 1 hour" },
  { id: 4, title: "Pickup groceries" },
  { id: 5, title: "Jog around the park 3x" },
];

function App() {
  const [todos, setTodos] = useState(DummyTodos);

  const newTodoHandler = (newTodo) => {
    setTodos((prevTodos) => {
      return [newTodo, ...prevTodos];
    });

    // console.log(todos);
  };

  return (
    <div className=" pt-32 hero-pattern">
      <Header />
      <TodoInputBox onSaveTodo={newTodoHandler} />
      <div className="bg-white rounded px-4 pt-2">
        {todos.map((item) => {
          return <TodoList key={item.id} id={item.id} title={item.title} />;
        })}

        <Footer />
      </div>
    </div>
  );
}

export default App;
