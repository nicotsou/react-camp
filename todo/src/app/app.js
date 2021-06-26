import { Component } from 'react';
import { nanoid } from 'nanoid';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

class App extends Component {

  state = {
    items: [
      this.createTodo('Learn React'),
      this.createTodo('Create App'),
      this.createTodo('Drink coffee')
    ],
    filter: 'active',
    searchTerm: ''
  }

  createTodo(text) {
    return {
      text,
      important: false,
      done: false,
      id: nanoid(10)
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
