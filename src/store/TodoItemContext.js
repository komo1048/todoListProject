import { createContext, useState } from "react";
let idCount = 0;
export const TodoItemContext = createContext({
  todos: "",
  addItem: (item) => {},
  removeItem: (itemId) => {},
  updateItem: (itemId, itemText) => {},
});

const TodoItemContextProvider = (props) => {
  const [todoItem, setTodoItem] = useState([]);

  const onAddItemHandler = (item) => {
    idCount++;
    setTodoItem((prevItem) => [...prevItem, { id: idCount, text: item }]);
  };

  const onRemoveItemHandler = (itemId) => {
    setTodoItem((prevItem) =>
      prevItem.filter((item) => {
        return item.id !== itemId;
      })
    );
  };

  const onUpdateItemHandler = (itemId, itemText) => {
    setTodoItem((prevItem) => {
      prevItem.filter((prevTodo) => {
        if (prevTodo.id === itemId) {
          prevTodo.text = itemText;
        }
        return prevTodo;
      });
      return [...prevItem];
    });
  };

  const context = {
    todos: todoItem,
    addItem: onAddItemHandler,
    removeItem: onRemoveItemHandler,
    updateItem: onUpdateItemHandler,
  };

  return (
    <TodoItemContext.Provider value={context}>
      {props.children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemContextProvider;
