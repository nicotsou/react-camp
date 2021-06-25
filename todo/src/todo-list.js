import TodoListItem from './todo-list-item';

const TodoList = () => {
  const items = [
    { text: 'Learn React!', important: true, done: false, id: 'asdf' },
    { text: 'Create App', important: true, done: false, id: '234234' },
    { text: 'Drink coffee', important: false, done: true, id: 'dfnfd' },
  ];

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
