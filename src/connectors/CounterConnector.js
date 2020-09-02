import { connect } from 'react-redux';
import CounterDumbComponenet from '../dumb-components/CounterDumbComponenet';
import {incrementCounter} from '../actions/counterActions';
import {decrementCounter} from '../actions/counterActions'


const mapStateToProps = (reduxStore) => {
  console.log('in mapStateToProps, here is the redux store: ', reduxStore);
  return {
    counter: reduxStore.page1Data
  };
}

const mapDispatchToProps = (dispatch) => {
  console.log('CounterDumbComponenet:mapStateTyProps: dispatch is a ', typeof dispatch )
  return{
    dispatchIncrementCounterAction: () => dispatch(incrementCounter()),
    dispatchDecrementCounterAction: () => dispatch(decrementCounter())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterDumbComponenet); //<CounterDumbComponent counter={0} hardCodedProperty='abc' /> 
{/* <CounterDumbComponenet
  counter={0}
  dispatchIncrementCounterAction={() => dispatch()} 
*/}