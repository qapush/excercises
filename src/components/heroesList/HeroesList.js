
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import useHeroes from '../../hooks/heroes.hook';
import Spinner from '../spinner/Spinner';
import { createSelector } from 'reselect';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE



const HeroesList = () => {

    const filteredHeroesSelector = createSelector(
        (state) => state.filters.appliedFilter,
        (state) => state.heroes.heroes,
        (filter, heroes) => {
            if (filter === 'all') {
                return heroes;
            } else { 
                return heroes.filter(item => item.element === filter);
            }
        }
    );

    const filteredHeroes = useSelector(filteredHeroesSelector);
    const { refreshHeroes, deleteHero, fetchFilters } = useHeroes();
    const heroesLoadingStatus = useSelector(state => state.heroesLoadingStatus);


    useEffect(() => {
        refreshHeroes();
        fetchFilters();
                // eslint-disable-next-line
    }, []);


    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }


    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({id, ...props}) => {
            return <HeroesListItem key={id}
                deleteHero={() => deleteHero(id)}
                {...props}
            />
        })
    }

    const elements = renderHeroesList(filteredHeroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;