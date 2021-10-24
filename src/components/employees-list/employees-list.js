import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp, onChangeProp}) => {
    
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps} // вместо {...item} может быть name={item.name} salary={item.salary}
                onDelete={() => onDelete(id)} 
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onChangeProp={(e) => onChangeProp(id, 'salary', e.currentTarget.value)}/> 
        )
    });

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}

export default EmployeesList;