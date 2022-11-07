import { useContext, useRef } from "react";
import { TodoItemContext } from "../store/TodoItemContext";
import classes from "./InputBox.module.css";

const InputBox = () => {
  const enteredTodo = useRef();
  const todoCtx = useContext(TodoItemContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submit click");
    console.log("ADD");
    todoCtx.addItem(enteredTodo.current.value);
    enteredTodo.current.value = "";
  };

  return (
    <div className={classes.todoapp__inputbox}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="todoItem"
          placeholder="할 일"
          className={classes.todoapp__inputbox_inp}
          ref={enteredTodo}
        />
        <button type="submit" className={classes.todoapp__inputbox_add_btn}>
          추가
        </button>
      </form>
    </div>
  );
};

export default InputBox;
