import TodoList from "./components/TodoList";
import classes from "./App.module.css";
import InputBox from "./components/InputBox";
import { useReducer } from "react";

let idCount = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      idCount++;
      return [...state, { id: idCount, text: action.text }];
    case "UPDATE":
      state.filter((item) => {
        if (item.id === action.id) {
          item.text = action.text;
        }
        return item;
      });
      return [...state];
    case "REMOVE":
      return [...state.filter((item) => item.id !== action.id)];
    default:
      return;
  }
};

function App() {
  const [todo, dispatch] = useReducer(reducer, []);

  const onAddItemHandler = (item) => {
    dispatch({ type: "ADD", id: idCount, text: item });
  };

  const onRemoveItemHandler = (itemId) => {
    console.log("remove");
    dispatch({ type: "REMOVE", id: itemId });
  };

  const onUpdateItemHandler = (itemId, itemText) => {
    console.log("update");
    dispatch({ type: "UPDATE", id: itemId, text: itemText });
  };

  return (
    <div className={classes.homePage__container}>
      <h1 style={{ "text-align": "center" }}>Todo List</h1>
      <InputBox enteredItem={onAddItemHandler} />
      <TodoList
        todoItem={todo}
        removeItem={onRemoveItemHandler}
        updateItem={onUpdateItemHandler}
      />
    </div>
  );
}

export default App;
