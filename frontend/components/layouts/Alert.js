import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AlertBox = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert, i) => (
    <div key={i} className='text-center'>
      <span
        className={`text-${alert.alertType == 'success' ? 'green' : 'red'}-500`}
      >
        {alert.msg}
      </span>
    </div>
  ));

AlertBox.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(AlertBox);
