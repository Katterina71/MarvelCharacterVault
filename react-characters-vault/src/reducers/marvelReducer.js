const initialState = {
  characters: {},
  searchResults: [],
  loading: false,
  error: null,
  favorites: [],
};

const marvelReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        characters: {
          ...state.characters,
          [action.payload.letter]: action.payload.characters,
        },
        loading: false,
      };
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        searchResults: action.payload.characters,
        loading: false,
      };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
      case 'SET_FAVORITES':
     return { ...state, favorites: action.payload };
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload),
      };
    default:
      return state;
  }
};

export { initialState, marvelReducer };
