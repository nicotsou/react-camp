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
    filter: 'all',
    searchTerm: ''
  };

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

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  onToggleImportant = (id) => {
    // update an element without changing old object
    this.setState(({ items }) => {
      const newItems = items.map((el) => {
        if (el.id !== id) {
          return el;
        }

        return {
          ...el,
          important: !el.important
        };
      });

      return {
        items: newItems
      };
    });
  };

  onToggleDone = (id) => {
    console.log('Done', id)
  };

  render() {
    const { items, filter } = this.state;

    return (
      <div className="todo-app">
        <AppHeader/>
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter
            onChange={this.onFilterChange}
            selected={filter} />
        </div>
        <TodoList
          items={items}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <ItemAddForm onAdd={this.onAdd}/>
      </div>
    );
  }
}

export default App;
