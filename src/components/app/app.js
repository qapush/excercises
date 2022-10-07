import { Component } from 'react';
import nextId from 'react-id-generator';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Alex',
          salary: 800,
          increase: false,
          id: 1,
          rise: false,
        },
        {
          name: 'Helen',
          salary: 2000,
          increase: true,
          id: 2,
          rise: false,
        },
        {
          name: 'Eve',
          salary: 5000,
          increase: false,
          id: 3,
          rise: false,
        },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  onToggleRise = (id) => {
    console.log('Rise this ', id);
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
