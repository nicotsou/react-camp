import { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

class App extends Component {

  state = {
    items: [
      {text: 'Learn React!', important: true, done: false, id: 'asdf'},
      {text: 'Create App', important: true, done: false, id: '234234'},
      {text: 'Drink coffee', important: false, done: true, id: 'dfnfd'}
    ],
    filter: 'all',
    searchTerm: ''
  }

  createTodo(text) {
    return {
      text,
      important: false,
      done: false,
      id: 'asd'
    };
  }

  onAdd = (text) => {
    this.setState(({ items }) => {
      const newItems = [ ...items, this.createTodo(text) ];
      return { items: newItems };
    });
  };

  render() {
    const { items, filter } = this.state;

    return (
      <div className="todo-app">
        <AppHeader/>
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter selected={filter} />
        </div>
        <TodoList items={items}/>
        <ItemAddForm onAdd={this.onAdd}/>
      </div>
    );
  }
}

export default App;
