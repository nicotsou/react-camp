import { Component } from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  };

  render() {

    const { text } = this.props;
    const { done, important } = this.state;

    const style = {
      color: important ? 'tomato': '#333'
    };

    const onClick = () => {
      this.setState(({ done }) => {
        return {
          done: !done
        }
      });
    };

    return (
      <span style={style} onClick={onClick}>
        { text }
        { done && <span> [DONE]</span> }
      </span>
    );
  }
}
