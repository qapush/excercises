import { useHttp } from "./http.hook";
import { useDispatch } from 'react-redux';
import { filtersFetching, heroesFetching, heroesFetched, heroesFetchingError, filtersFetched, filtersFetchingError, heroesDelete, heroesAdd } from '../actions';
import { useCallback } from "react";


const useHeroes = () => {
    
    const { request } = useHttp();
    const dispatch = useDispatch();

    const refreshHeroes = useCallback(() => {
        // dispatch(heroesFetching());
        dispatch(heroesFetching);
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
    }, [request]);

    const fetchFilters = () => {
        dispatch(filtersFetching());
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()))
    }
    
    
    const deleteHero = useCallback((id) => {
        request(`http://localhost:3001/heroes/${id}`, "DELETE")
            .then(dispatch(heroesDelete(id)))
            .catch(() => dispatch(heroesFetchingError()))
    }, [request])
        
    const addHero = useCallback((hero) => {
        request(`http://localhost:3001/heroes`,'POST', JSON.stringify(hero))
            .then(data => dispatch(heroesAdd(data)))
            .catch(() => dispatch(heroesFetchingError()))
    }, [request])

    return { refreshHeroes, deleteHero, addHero, fetchFilters };
}

export default useHeroes;



