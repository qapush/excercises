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

export const addHero = (hero) => {
    return {
        type: 'HEROES_ADDHERO',
        payload: hero
    }
}

export const removeHero = (id) => {
    return {
        type: 'HEROES_REMOVEHERO',
        payload: id
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const activeFilterSet = (filter) => {
    return {
        type: 'ACTIVE_FILTER_SET',
        payload: filter
    }
}