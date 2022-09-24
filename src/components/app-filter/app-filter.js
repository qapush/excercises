import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="buttom">
        All employees
      </button>
      <button className="btn btn-outline-light" type="buttom">
        Employees for promotion
      </button>
      <button className="btn btn-outline-light" type="buttom">
        Filter by salary &gt; 1000$
      </button>
    </div>
  );
};

export default AppFilter;
