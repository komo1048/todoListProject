import classes from "./InputBox.module.css";

const InputBox = () => {
  return (
    <div className={classes.todoapp__inputbox}>
      <input
        type="text"
        name="todoItem"
        placeholder="할 일"
        className={classes.todoapp__inputbox_inp}
      />
      <button type="submit" className={classes.todoapp__inputbox_add_btn}>
        추가
      </button>
    </div>
  );
};

export default InputBox;
