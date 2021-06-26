import './todo-list-item.css';

const TodoListItem = (props) => {

  const { text, done, important } = props;
  const { onToggleImportant, onToggleDone } = props;

  const style = {
    color: important ? 'steelblue' : '#333',
    fontWeight: important ? 'bold' : null,
    textDecoration: done ? 'line-through' : null
  };

  return (
    <span className="todo-list-item">
        <span
          className="todo-list-item-label"
          style={style}
          onClick={onToggleDone}>
          {text}
        </span>
        <button
          className="btn btn-outline-success btn-sm"
          onClick={onToggleImportant}>
          <i className="fas fa-exclamation"/>
        </button>

      </span>
  );
}

export default TodoListItem;
