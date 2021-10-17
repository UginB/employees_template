import { Component } from 'react';
import nextId from "react-id-generator";

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
                {name: 'Пупа', salary: 800, increase: false, id: 1},
                {name: 'Лупа', salary: 3000, increase: false, id: 2},
                {name: 'Жонни', salary: 5000, increase: false, id: 3}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id)
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];

            // return {
            //     data: newArr
            // }

            return {
                data: data.filter(item  => item.id !== id)
            }
        })
    }

    htmlId = nextId();

    addItem = (name, salary) => {
        this.setState(({data}) => {
            const newArr = [...data].push({name: name, salary: salary, increase: false, id: this.htmlId()})
            console.log(newArr);
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className='app'>
                <AppInfo />
    
                <div className='search-panel'>
                    <SearchPanel />
                    <AppFilter />
                </div>
                
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm 
                    onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;