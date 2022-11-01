import { useRef, useState } from "react";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [updateBtn, setUpdateBtn] = useState(false);
  const [todoUpdate, setTodoUpdate] = useState(props.item);

  const enteredTodo = useRef();

  const onUpdateHandler = () => {
    setUpdateBtn((prevState) => !prevState);
  };

  const removeItemHandler = () => {
    props.removeItem(props.id);
  };

  const onTodoChangeHandler = () => {
    setTodoUpdate(enteredTodo.current.value);
  };

  const onUpdateBtnHandler = (event) => {
    event.preventDefault();
    setUpdateBtn((prevState) => !prevState);

    props.updateItem(props.id, todoUpdate);
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
        onClick={removeItemHandler}
      >
        🗑
      </button>
    </li>
  );
};

export default TodoItem;
