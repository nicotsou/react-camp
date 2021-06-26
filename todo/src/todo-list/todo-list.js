import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ items }) => {

  const elements = items.map(({ text, important, done, id }) => (
    <li key={id} className="list-group-item">
      <TodoListItem
        text={text}
        important={important}
        done={done} />
    </li>
  ));

  return (
    <ul className="todo-list list-group">
      { elements }
    </ul>
  );
}

export default TodoList;
