import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap'

const AlertBox = ({ alerts }) =>
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert, i) => (
        <Alert variant={`${alert.alertType === 'success' ? 'success' : 'danger'}`}>
            {alert.msg}
        </Alert>
    ));

AlertBox.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(AlertBox);
