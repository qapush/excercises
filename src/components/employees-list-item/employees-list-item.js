import './employees-list-item.css';

const EmployeesListItem = (props) => {
  const { name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise } = props;
  let itemClassName = 'list-group-item d-flex justify-content-between';
  if (increase) {
    itemClassName += ' increase';
  } else if (rise) {
    itemClassName += ' like';
  }

  return (
    <li className={itemClassName}>
      <span className="list-group-item-label" onClick={onToggleRise}>
        {name}
      </span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm ">
          <i className="fas fa-cookie" onClick={onToggleIncrease}></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
