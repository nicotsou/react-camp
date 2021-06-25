const TodoListItem = ({ text, important, done }) => {
  const style = {
    color: important ? 'tomato': '#333'
  };

  return (
    <span style={style}>
      { text }
    </span>
  );
}

export default TodoListItem;
