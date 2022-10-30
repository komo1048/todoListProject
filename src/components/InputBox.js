import { useRef } from "react";
import classes from "./InputBox.module.css";

const InputBox = (props) => {
  const enteredTodo = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submit click");
    props.enteredItem(enteredTodo.current.value);
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
