
// all, active, done
const ItemStatusFilter = ({ selected }) => {

  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  const buttonList = buttons.map(({ name, label }) => {
    const style = {
      color: name === selected ? 'tomato' : '#333'
    };

    return <button style={style}>{label}</button>;
  })

  return <div>{ buttonList }</div>;
}

export default ItemStatusFilter;
