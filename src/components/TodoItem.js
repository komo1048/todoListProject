import { useContext, useRef, useState } from "react";
import { TodoItemContext } from "../store/TodoItemContext";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [updateBtn, setUpdateBtn] = useState(false);
  const [todoUpdate, setTodoUpdate] = useState(props.item);

  const enteredTodo = useRef();

  const todoCtx = useContext(TodoItemContext);

  const onUpdateHandler = () => {
    setUpdateBtn((prevState) => !prevState);
  };

  const onRemoveItemHandler = () => {
    console.log("REMOVE");
    todoCtx.removeItem(props.id);
  };

  const onTodoChangeHandler = () => {
    setTodoUpdate(enteredTodo.current.value);
  };

  const onUpdateBtnHandler = (event) => {
    event.preventDefault();
    setUpdateBtn((prevState) => !prevState);

    todoCtx.updateItem(props.id, todoUpdate);
  };

  return (
    <li className={classes.todoapp__item}>
      <input type="checkbox" className={classes.todoapp_item_checkbox} />
      {!updateBtn && (
        <>
          <span className={classes.todoapp_item_ctx}>{props.item}</span>

          <button
            type="button"
            className={classes.todoapp__item_edit_btn}
            onClick={onUpdateHandler}
          >
            ✏
          </button>
        </>
      )}
      {updateBtn && (
        <>
          <form onSubmit={onUpdateBtnHandler}>
            <input
              type="text"
              name="todoItem"
              className={classes.todoapp__inputbox_inp}
              ref={enteredTodo}
              value={todoUpdate}
              onChange={onTodoChangeHandler}
            />
            <button type="submit" className={classes.todoapp__inputbox_add_btn}>
              수정
            </button>
          </form>
        </>
      )}

      <button
        type="button"
        className={classes.todoapp__item_delete_btn}
        onClick={onRemoveItemHandler}
      >
        🗑
      </button>
    </li>
  );
};

export default TodoItem;
