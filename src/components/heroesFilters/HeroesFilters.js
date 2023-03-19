
// Задача для этого компонента:
// ✅ Фильтры должны формироваться на основании загруженных данных
// ✅ Фильтры должны отображать только нужных героев при выборе
// ✅ Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import { useSelector, useDispatch } from "react-redux";
import { filtersFetched, activeFilterSet } from "../../actions";
import classNames from "classnames";
import Spinner from "../spinner/Spinner";

const HeroesFilters = () => {
    
    const dispatch = useDispatch();
    const { filters, activeFilter } = useSelector(state => state)
    const { request } = useHttp();
    let filtersList;

    useEffect(() => {
        request('http://localhost:3001/filters')
            .then(filters => dispatch(filtersFetched(filters)))
            .catch( e => console.log(e))
    }, [])

    if(filters.length === 0) {
        return <Spinner/>
    }

    filtersList = filters.map(({name, ru}) => {

        const className = classNames(
            'btn', 
            {
                'btn-outline-dark': name === 'all',
                'btn-danger': name === 'fire',
                'btn-primary': name === 'water',
                'btn-success': name === 'wind',
                'btn-secondary': name === 'earth',
                'active': activeFilter === name
            }
        )

        return <button
            key={name}
            className={className}
            onClick={() => dispatch(activeFilterSet(name))}
        >{ru}</button>
    })
     

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {filtersList}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;