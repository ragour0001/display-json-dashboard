import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Switch as MuiSwitch, FormHelperText } from '@mui/material';

const Switch = ({
  id,
  label,
  required,
  helperText,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={className}>
      <FormControlLabel
        control={
          <MuiSwitch
            id={id}
            required={required}
            {...props}
          />
        }
        label={label}
      />
      {(helperText || error) && (
        <FormHelperText error={!!error}>
          {error || helperText}
        </FormHelperText>
      )}
    </div>
  );
};

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Switch; 