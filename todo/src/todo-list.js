import TodoListItem from './todo-list-item';

const TodoList = ({ items }) => {

  const elements = items.map(({ text, important, done, id }) => (
    <li key={id}>
      <TodoListItem
        text={text}
        important={important}
        done={done} />
    </li>
  ));

  return (
    <ul className="important">
      { elements }
    </ul>
  );
}

export default TodoList;
