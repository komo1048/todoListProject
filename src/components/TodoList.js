import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = () => {
  return (
    <div className={classes.todoapp_list}>
      <p className={classes.todoapp_list_tit}>할 일 목록</p>
      <ul className={classes.todoapp__list_ul}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
};

export default TodoList;
