import { createStore, combineReducers } from 'redux';
import reducer1 from '../reducers/reducer1';
import reducer2 from '../reducers/reducer2';

const rootReducer = combineReducers({
    page1Data: reducer1,
    page2Data: reducer2
});

const store = createStore(rootReducer);
console.log(store);
console.log(store.getState());

export default store;
