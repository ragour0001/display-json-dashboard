import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const Input = ({
  id,
  type,
  label,
  required,
  helperText,
  error,
  className = '',
  ...props
}) => {
  return (
    <TextField
      id={id}
      type={type}
      label={label}
      required={required}
      helperText={error || helperText}
      error={!!error}
      fullWidth
      variant="outlined"
      margin="normal"
      className={className}
      {...props}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Input; 