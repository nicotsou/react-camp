import { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  };

  render() {

    const { text } = this.props;
    const { done, important } = this.state;

    const style = {
      color: important ? 'steelblue': '#333',
      fontWeight: important ? 'bold': null,
      textDecoration: done ? 'line-through': null
    };

    const onClick = () => {
      this.setState(({ done }) => {
        return {
          done: !done
        }
      });
    };

    const onMarkImportant = () => {
      this.setState(({ important }) => ({ important: !important }));
    };

    return (
      <span className="todo-list-item">
        <span
          className="todo-list-item-label"
          style={style}
          onClick={onClick}>
          { text }
        </span>
        <button
          className="btn btn-outline-success btn-sm"
          onClick={onMarkImportant}>
          <i className="fas fa-exclamation" />
        </button>

      </span>
    );
  }
}
