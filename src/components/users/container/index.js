import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Users from '../index';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);