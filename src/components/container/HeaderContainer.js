import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../Header';

const mapStateToProps = (state) => {
    return {
        // TODO
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);