

// Задача для этого компонента:
// ✅ Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// ✅ Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// ✅ Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// ✅ Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useHttp } from "../../hooks/http.hook";
import { useDispatch, useSelector } from "react-redux";
import { addHero } from "../../actions";

const HeroesAddForm = () => {

    const { request } = useHttp();
    const dispatch = useDispatch();
    const [hero, setHero] = useState({
        name: '',
        description: '',
        element: ''
    })
    const filters = useSelector(state => state.filters)

    const handleChange = ({target}) => {
        const { value, name } = target;
        setHero({
            ...hero, 
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHero = JSON.stringify({
            ...hero,
            id: uuidv4()
        })
        request('http://localhost:3001/heroes', 'POST', newHero)
            .then(hero => dispatch(addHero(hero)))
            .catch(e => console.log(e))
        setHero({
            name: '',
            description: '',
            element: ''
        })
    }

    

    if (filters.length === 0) return null

    const options = filters.map(filter => {
        if (filter.name !== 'all') {
            return <option key={filter.name} value={filter.name}>{filter.ru}</option>
        }
    })

    // <option value="fire">Огонь</option>
    // <option value="water">Вода</option>
    // <option value="wind">Ветер</option>
    // <option value="earth">Земля</option>

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={hero.name}
                    onChange={handleChange}
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
                    style={{ "height": '130px' }}
                    value={hero.description}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={hero.element}
                    onChange={handleChange}
                >
                    <option value=''>Я владею элементом...</option>
                    {options}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
        )
}

export default HeroesAddForm;