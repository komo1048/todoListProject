import TodoList from "./components/TodoList";
import classes from "./App.module.css";
import InputBox from "./components/InputBox";

function App() {
  return (
    <div className={classes.homePage__container}>
      <h1 style={{ "text-align": "center" }}>Todo List</h1>
      <InputBox />
      <TodoList />
    </div>
  );
}

export default App;
