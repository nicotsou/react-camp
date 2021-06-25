import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
  return <h1>Todo</h1>;
}

const SearchPanel = () => {
  return <input placeholder="search"/>;
}

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Create awesome app</li>
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
