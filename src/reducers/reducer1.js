const initialState = 0;

function reducer1 (state = initialState, action) {
  console.log('Reducer 1 just received a notification ', action.type);
  
  let newStateToReturn = state;
  switch (action.type) {  
    case 'INCREMENT_COUNTER':
      newStateToReturn++;
      break;
    case 'DECREMENT_COUNTER':
      newStateToReturn--;  
      break;
    default:
      newStateToReturn = state;
  }

  return newStateToReturn;
}

export default reducer1;
