import { useHttp } from "./http.hook";
import { useDispatch } from 'react-redux';
import { heroesFetching, heroesFetched, heroesFetchingError } from '../actions';


const useHeroes = () => {
    
    const { request } = useHttp();
    const dispatch = useDispatch();

    const refreshHeroes = () => {
        dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
    }
    
    
    const deleteHero = (id) => {
        request(`http://localhost:3001/heroes/${id}`,'DELETE')
            .then(refreshHeroes())
            .catch(() => dispatch(heroesFetchingError()))
    }
        
    const addHero = (hero) => {
        request(`http://localhost:3001/heroes`,'POST', JSON.stringify(hero))
            .then(refreshHeroes())
            .catch(() => dispatch(heroesFetchingError()))
    }

    return { refreshHeroes, deleteHero, addHero };
}

export default useHeroes;



