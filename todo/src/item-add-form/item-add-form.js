import './item-add-form.css';
import {Component} from 'react';

class ItemAddForm extends Component {

  state = {
    text: ''
  };

  onItemAdded = (e) => {
    e.preventDefault();

    if (this.state.text.length > 0) {
      this.props.onAdd(this.state.text);
      this.setState({ text: '' });
    }
  };

  onTextChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {

    return (
      <form
        onSubmit={this.onItemAdded}
        className="item-add-form d-flex">
        <input
          value={this.state.text}
          className="form-control"
          placeholder="Add Todo"
          onChange={this.onTextChange} />
        <button
          className="btn btn-outline-secondary">
          Add
        </button>
      </form>
    );
  }
}

ItemAddForm.defaultProps = {
  onAdd: () => {}
};

export default ItemAddForm;
