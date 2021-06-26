import './item-status-filter.css';

const ItemStatusFilter = ({ selected }) => {

  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  const buttonList = buttons.map(({ name, label }) => {

    const btnClass = name === selected ? 'btn-info' : 'btn-outline-secondary';

    return (
      <button
        key={name}
        className={`btn ${btnClass}`}>
        {label}
      </button>
    );
  })

  return (
    <div className="btn-group">
      { buttonList }
    </div>
  );
}

export default ItemStatusFilter;
