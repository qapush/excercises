const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filters: [],
  activeFilter: 'all',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };
    case "HEROES_FETCHED":
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: "idle",
      };
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    case "HEROES_REMOVEHERO":
      return {
        ...state,
        heroes: state.heroes.filter((hero) => hero.id !== action.payload),
      };
    case "HEROES_ADDHERO":
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
      };
    case "FILTERS_FETCHED":
      return {
        ...state,
        filters: action.payload,
      };
    case "ACTIVE_FILTER_SET":
      return {
        ...state,
        activeFilter: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
