import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  return (
    <li className={classes.todoapp__item}>
      <input type="checkbox" className={classes.todoapp_item_checkbox} />
      <span className={classes.todoapp_item_ctx}>{props.item}</span>
      <button type="button" className={classes.todoapp__item_edit_btn}>
        ✏
      </button>
      <button
        type="button"
        className={classes.todoapp__item_delete_btn}
        onClick={props.removeItem(props.id)}
      >
        🗑
      </button>
    </li>
  );
};

export default TodoItem;
