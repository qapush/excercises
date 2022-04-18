const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    appliedFilter: 'all'
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'fetching'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case 'FILTERS_CHANGE':          

            return {
                ...state,
                appliedFilter: action.payload
            }
        default: return state
    }
}

export default filters;