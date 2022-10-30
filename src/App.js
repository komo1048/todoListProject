import TodoList from "./components/TodoList";
import classes from "./App.css";
import InputBox from "./components/InputBox";
import { useState } from "react";

function App() {
  const [enteredTodoItem, setEnteredTodoItem] = useState([]);

  const itemHandler = (item) => {
    setEnteredTodoItem((prevItem) => {
      return [...prevItem, { id: prevItem.length, text: item }];
    });
  };

  const onRemoveItemHandler = (itemId) => {
    setEnteredTodoItem((prevItem) => {
      return prevItem.filter((item) => item.id !== itemId);
    });
  };

  return (
    <div className={classes.homepage__container}>
      <h1>Todo List</h1>
      <InputBox enteredItem={itemHandler} />
      <TodoList todoItem={enteredTodoItem} removeItem={onRemoveItemHandler} />
    </div>
  );
}

export default App;
