import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {
  const items = [
    { text: 'Learn React!', important: true, done: false, id: 'asdf' },
    { text: 'Create App', important: true, done: false, id: '234234' },
    { text: 'Drink coffee', important: false, done: true, id: 'dfnfd' },
  ];

  return (
    <div className="todo-app">
      <AppHeader />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter selected="done" />
      </div>
      <TodoList items={items} />
      <ItemAddForm />
    </div>
  );
};

export default App;
