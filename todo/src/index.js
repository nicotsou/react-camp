import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
  const isLoggedIn = false;

  return (
    <>
      <h1>Todo</h1>
      { isLoggedIn ? <span>logged in</span> : <span>Guest</span> }
    </>
  );
}

const SearchPanel = () => {
  return <input placeholder="search"/>;
}

const TodoListItem = ({ text }) => {
  return <span>{text}</span>;
}

const TodoList = () => {
  const items = [
    'Learn React!',
    'Create awesome app'
  ];

  return (
    <ul className="important">
      <li><TodoListItem text={items[0]} /></li>
      <li><TodoListItem text={items[1]} /></li>
    </ul>
  );
}

const ItemAddForm = () => (
  <form>
    <input placeholder="Add Todo"/>
    <button>Add</button>
  </form>
);

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
      <ItemAddForm />
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root'));
