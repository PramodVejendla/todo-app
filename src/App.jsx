import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoInputBox from "./components/TodoInputBox";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className=" pt-32 hero-pattern">
      <Header />
      <TodoInputBox />
      <div className="bg-white rounded px-4 pt-2">
        <TodoList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
