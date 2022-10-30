import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <div className={classes.todoapp_list}>
      <p className={classes.todoapp_list_tit}>할 일 목록</p>
      <ul className={classes.todoapp__list_ul}>
        {props.todoItem.map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              item={item.text}
              removeItem={props.removeItem}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
