

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { useReducer } from 'react';
import { useSelector } from 'react-redux';
import useHeroes from '../../hooks/heroes.hook';
import { v4 as uid } from 'uuid';

const initialState = {
    id: '',
    name: '',
    description: '',
    element: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'reset':
            return {
                ...initialState
            }
        default:
            const { field, value } = action;
            return {
                ...state,
                [field]: value
            }
    }
}

const HeroesAddForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const id = uid();
    const { addHero } = useHeroes();
    
    const onChange = (e) => {
        dispatch({
            field: e.target.name,
            value: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const hero = { ...state, id };
        addHero(hero);
        dispatch({ type: 'reset' });
    }

    const { filters } = useSelector(state => state.filters)

    const options = filters.map( (option, id) => {
        if(option.name !== 'all') return <option key={id} value={option.name}>{ option.label }</option>
    } )

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={state.name}
                    onChange={onChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="description" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    value={state.description}
                    onChange={onChange}
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    placeholder={<div>Type to search</div>}
                    value={state.element}
                    onChange={onChange}
                >
                    <option value=''>Я владею элементом...</option>
                    { options }
                </select>
            </div>

            <button
                type="submit"
                className="btn btn-primary"
            >Создать</button>
        </form>
    )
}

export default HeroesAddForm;