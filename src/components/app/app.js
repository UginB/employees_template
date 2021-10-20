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
                {name: 'Пупа', salary: 800, increase: false, like: false, id: 1},
                {name: 'Лупа', salary: 3000, increase: false, like: false, id: 2},
                {name: 'Жонни', salary: 5000, increase: false, like: false, id: 3}
            ],
            term: ''
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

    addItem = (name, salary) => {
        this.setState(({data}) => {
            const newArr = [...data, {name, salary, increase: false, like: false, id: nextId()}]
            return {
                data: newArr
            }
        })
    }

    // onToggleIncrease = (id) => {
    //     // this.setState(({data}) => {
    //     //     const index = data.findIndex(elem => elem.id === id)

    //     //     const old = data[index];
    //     //     const newItem = {...old, increase: !old.increase}
    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

    //     //     return {
    //     //         data: newArr
    //     //     }
    //     // })

                    //ИЛИ ТАК

    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id) {
    //                 return {...item, increase: !item.increase}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    // onToggleLike = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id) {
    //                 return {...item, like: !item.like}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'all' : 
                return items;
            case 'moreThan1000' : 
                return items.filter(item => {
                    return item.salary > 1000
                })
            case 'increase' : 
                return items.filter(item => {
                    return item.increase.indexOf(true) > -1
                })
            default: return items;
        }
    }

    render() {
        const {data, term} = this.state;
        const employees = this.state.data.length;
        let employeesIncrease = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className='app'>
                <AppInfo 
                    employees={employees}
                    employeesIncrease={employeesIncrease}/>
    
                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                        onFilter={this.filterEmp}
                        data={visibleData}/>
                </div>
                
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm 
                    onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;