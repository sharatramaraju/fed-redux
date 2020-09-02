import { connect } from 'react-redux';
import NameDumbComponenet from '../dumb-components/NameDumbComponenet';

const mapStateToProps = (reduxStore) => {
  console.log('in mapStateToProps, here is the redux store: ', reduxStore);
  return {
        name: reduxStore.page2Data
  };
}

export default connect(mapStateToProps)(NameDumbComponenet); //<CounterDumbComponent counter={0} hardCodedProperty='abc' /> 
