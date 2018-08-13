import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Users from '../Users';

const mapStateToProps = (state) => {
    return {
        // TODO
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);