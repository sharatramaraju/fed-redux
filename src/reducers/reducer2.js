const initialState = {
    fname: 'Sha',
    lname: 'Ram'
};

function reducer2 (state = initialState, action) {
  console.log('Reducer 2 just received a notification ', action.type);
  return state;
}

export default reducer2;
