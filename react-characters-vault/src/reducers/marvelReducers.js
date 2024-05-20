export const ACTION = {
    SET_CHARACTERS: 'set_characters',
}

export const marvelReducer = (state, action) => {
    switch (action.type){
      case ACTION.SET_CHARACTERS:
        return {...state, characters: action.payload }
      default: 
        return state;
    }
  }

//   export default marvelReducer;

  