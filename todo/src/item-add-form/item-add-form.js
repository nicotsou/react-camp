import './item-add-form.css';

const ItemAddForm = () => (
  <form className="item-add-form d-flex">
    <input
      className="form-control"
      placeholder="Add Todo"/>
    <button
      className="btn btn-outline-secondary">
      Add
    </button>
  </form>
);

export default ItemAddForm;
