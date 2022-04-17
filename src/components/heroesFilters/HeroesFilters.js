
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { useSelector, useDispatch } from "react-redux";
import { filtersChange } from "../../actions";

const HeroesFilters = () => {

    const { filters, appliedFilter } = useSelector(state => state.filters);
    
    const dispatch = useDispatch();

    const buttons = filters.map((item, id) => {
        const activeClass = appliedFilter === item.name ? ' active' : '';
        return <button
            key={id}
            className={'btn ' + item.class + activeClass}
            onClick = { () => dispatch(filtersChange(item.name)) }
        >{item.label}</button>
        }
    )

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {buttons}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;