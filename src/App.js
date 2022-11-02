import TodoList from "./components/TodoList";
import classes from "./App.module.css";
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
    console.log("remove button click");
    setEnteredTodoItem((prevItem) => {
      return prevItem.filter((item) => item.id !== itemId);
    });
  };

  const updateItemHandler = (itemId, itemText) => {
    setEnteredTodoItem((prevItem) => {
      prevItem.filter((item) => {
        if (item.id === itemId) {
          item.text = itemText;
        }

        return item;
      });
      return [...prevItem];
    });
  };

  return (
    <div className={classes.homePage__container}>
      <h1 style={{ "text-align": "center" }}>Todo List</h1>
      <InputBox enteredItem={itemHandler} />
      <TodoList
        todoItem={enteredTodoItem}
        removeItem={onRemoveItemHandler}
        updateItem={updateItemHandler}
      />
    </div>
  );
}

export default App;
