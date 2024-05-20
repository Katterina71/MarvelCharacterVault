
 const marvelReducer = (state, action) => {
    switch (action.type){
      case 'SET_CHARACTERS':
        return {...state, characters: action.payload };
       case 'SET_SEARCH_QUERY':
        return { ...state, searchQuery: action.payload };
      case 'SET_SELECTED_CHARACTER': 
        return { ...state, selectedCharacter: action.payload };
      default: 
        return state;
    }
  }

  export default marvelReducer;

  