import './app-filter.css'

// const AppFilter = ({onFilter}) => {
//     const filter = (e) => {onFilter(e.target.getAttribute('data-filter'))}

//     return (
//         <div className="btn-group">
//             <button 
//                 className="btn btn-light"
//                 type='button'
//                 data-filter='all'
//                 onClick={filter}>
//                     Все сотрудники
//             </button>
//             <button 
//                 className="btn btn-outline-light"
//                 type='button'
//                 data-filter='increase'
//                 onClick={filter}>
//                     На повышение
//             </button>
//             <button 
//                 className="btn btn-outline-light"
//                 type='button'
//                 data-filter='salary'
//                 onClick={filter}>
//                     З/П больше 1000$
//             </button>
//         </div>
//     )
// }

const AppFilter = (props) => {
    const buttonsData = [
       {name: 'all', label: 'Все сотрудники'},
       {name: 'increase', label: 'На повышение'},
       {name: 'moreThan1000', label: 'З/П больше 1000$'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button 
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => props.onFilter(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;

