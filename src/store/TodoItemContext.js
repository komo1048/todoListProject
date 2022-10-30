import { createContext } from "react";

export const TodoItemContext = createContext({
  item: "",
  removeItem: (itemId) => {},
  updateItem: (itemId) => {},
});

const TodoItemContextProvider = (props) => {
  return <TodoItemContext.Provider>{props.children}</TodoItemContext.Provider>;
};

export default TodoItemContextProvider;
