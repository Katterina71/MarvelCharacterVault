
 const marvelReducer = (state, action) => {
    switch (action.type){
      case 'SET_CHARACTERS':
        return {...state, characters: action.payload };
       case 'SET_SEARCH_QUERY':
        return { ...state, searchQuery: action.payload };
      case 'SET_SELECTED_CHARACTER': 
        return { ...state, selectedCharacter: action.payload };
      case 'ADD_TO_FAVORITES':
        return {...state, favoriteCharacters: [...state.favoriteCharacters, action.payload] };
      case 'REMOVE_FROM_FAVORITES':
        return {...state, favoriteCharacters: state.favoriteCharacters.filter(character => character.id !== action.payload)};
      default: 
        return state;
    }
  }

  export default marvelReducer;

  