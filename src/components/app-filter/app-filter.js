import './app-filter.css'

const AppFilter = (props) => {
    const{data, onFilter} = props;

    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type='button'
                data-filter='all'
                onClick={(e) => onFilter(data, e.currentTarget.getAttribute('data-filter'))}>
                    Все сотрудники
            </button>
            <button 
                className="btn btn-outline-light"
                type='button'
                data-filter='increase'
                onClick={(e) => onFilter(data, e.currentTarget.getAttribute('data-filter'))}>
                    На повышение
            </button>
            <button 
                className="btn btn-outline-light"
                type='button'
                data-filter='moreThan1000'
                onClick={(e) => onFilter(data, e.currentTarget.getAttribute('data-filter'))}>
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;