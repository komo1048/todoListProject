import { useContext } from "react";
import { TodoItemContext } from "../store/TodoItemContext";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const todoCtx = useContext(TodoItemContext);

  return (
    <div className={classes.todoapp_list}>
      <p className={classes.todoapp_list_tit}>할 일 목록</p>
      <ul className={classes.todoapp__list_ul}>
        {todoCtx.todos.map((item) => {
          return <TodoItem key={item.id} id={item.id} item={item.text} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
