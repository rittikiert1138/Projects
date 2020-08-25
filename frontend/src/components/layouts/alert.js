import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

const AlertBox = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div
      className={`w-full h-12 border p-3 mt-4 ${
        alert.alertType == 'success'
          ? 'border-green-500 bg-green-100'
          : 'border-red-500 bg-red-100'
      }`}
    >
      {alert.alertType == 'success' ? (
        <i class='far fa-check-circle text-green-500'></i>
      ) : (
        <i class='far fa-times text-red-500'></i>
      )}

      <span
        className={`ml-4 ${
          alert.alertType == 'success' ? 'text-green-500' : 'text-red-500'
        }`}
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
