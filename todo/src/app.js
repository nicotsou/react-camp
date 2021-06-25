import AppHeader from './app-header';
import SearchPanel from './search-panel';
import TodoList from './todo-list';
import ItemAddForm from './item-add-form';

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

export default App;
