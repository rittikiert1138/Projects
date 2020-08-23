import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div className='grid grid-cols-12 gap-4 mb-4' key={alert.id}>
      <div className='col-start-1 col-end-13 text-white'>
        <div className={`full-width bg-${alert.alertType == 'success' ? 'green' : 'red'}-500 p-3`}>{alert.msg}</div>
      </div>
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
