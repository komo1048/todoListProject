import TodoList from "./components/TodoList";
import classes from "./App.css";
import InputBox from "./components/InputBox";

function App() {
  return (
    <div className={classes.homepage__container}>
      <h1>Todo List</h1>
      <InputBox />
      <TodoList />
    </div>
  );
}

export default App;
