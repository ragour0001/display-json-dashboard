import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const Textarea = ({
  id,
  label,
  required,
  helperText,
  error,
  rows = 4,
  className = '',
  ...props
}) => {
  return (
    <TextField
      id={id}
      label={label}
      required={required}
      helperText={error || helperText}
      error={!!error}
      fullWidth
      multiline
      rows={rows}
      variant="outlined"
      margin="normal"
      className={className}
      {...props}
    />
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.string,
  rows: PropTypes.number,
  className: PropTypes.string,
};

export default Textarea; 