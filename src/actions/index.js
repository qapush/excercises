export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroesAdd = (hero) => {
    return {
        type: 'HEROES_ADD',
        payload: hero
    }
}
export const heroesDelete = (id) => {
    return {
        type: 'HEROES_DELETE',
        payload: id
    }
}

export const filtersFetched = (heroes) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: heroes
    }
}

export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}

export const filtersChange = (filter) => {
    return {
        type: 'FILTERS_CHANGE',
        payload: filter
    }
}