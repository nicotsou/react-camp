import './item-add-form.css';

const ItemAddForm = ({ onAdd }) => {

  const onItemAdded = (e) => {
    e.preventDefault();
    onAdd('New Item');
  };

  return (
    <form
      onSubmit={onItemAdded}
      className="item-add-form d-flex">
      <input
        className="form-control"
        placeholder="Add Todo"/>
      <button
        className="btn btn-outline-secondary">
        Add
      </button>
    </form>
  );
};

ItemAddForm.defaultProps = {
  onAdd: () => {}
};

export default ItemAddForm;
