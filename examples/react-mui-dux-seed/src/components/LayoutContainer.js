import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Layout from 'components/Layout'

function mapStateToProps(state, ownProps) {
  console.log(ownProps,'eee');
  return {
    ...ownProps
    // redux store
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
